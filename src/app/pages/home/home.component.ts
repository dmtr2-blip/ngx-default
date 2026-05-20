import { isPlatformBrowser } from '@angular/common';
import {
	afterNextRender,
	ChangeDetectionStrategy,
	Component,
	DestroyRef,
	inject,
	PLATFORM_ID,
	signal,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { AnimatedCounterDirective } from '../../directives/animated-counter.directive';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import { MAP_EMBED_URL, MUSEUM_IMAGES, TICKET_URL } from '../../core/museum.const';
import { EXHIBITS } from '../../../data/museum/exhibits';
import {
	FOUNDER_APPEAL,
	HOME_FEATURES,
	HOME_GALLERY,
	HOME_NEWS,
	HOME_STATS,
	MUSEUM_MISSION,
} from '../../../data/museum/home-content';
import { PARTNERS } from '../../../data/museum/partners';
import { MuseumSchemaComponent } from '../../components/museum-schema/museum-schema.component';
import { COMPANY_FALLBACK } from '../../feature/company/company.const';

@Component({
	selector: 'app-home',
	imports: [RouterLink, ScrollRevealDirective, AnimatedCounterDirective, MuseumSchemaComponent],
	templateUrl: './home.component.html',
	styleUrl: './home.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
	private readonly _platformId = inject(PLATFORM_ID);
	private readonly _sanitizer = inject(DomSanitizer);
	private readonly _destroyRef = inject(DestroyRef);

	protected readonly heroImage = MUSEUM_IMAGES.hero;
	protected readonly expoImage = MUSEUM_IMAGES.expo;
	protected readonly heroBackgroundStyle = `--hero-image: url('${MUSEUM_IMAGES.hero}')`;
	protected readonly safeMapUrl = this._sanitizer.bypassSecurityTrustResourceUrl(MAP_EMBED_URL);
	protected readonly baydaImage = MUSEUM_IMAGES.bayda;
	protected readonly valuesImage = MUSEUM_IMAGES.values;
	protected readonly ticketUrl = TICKET_URL;
	protected readonly companyName = COMPANY_FALLBACK.name;
	protected readonly companyDescription = COMPANY_FALLBACK.description;
	protected readonly companyImage = COMPANY_FALLBACK.image;
	protected readonly news = HOME_NEWS;
	protected readonly gallery = HOME_GALLERY;
	protected readonly features = HOME_FEATURES;
	protected readonly mission = MUSEUM_MISSION;
	protected readonly founderAppeal = FOUNDER_APPEAL;
	protected readonly exhibits = EXHIBITS;
	protected readonly stats = HOME_STATS;
	protected readonly partners = [...PARTNERS, ...PARTNERS];
	protected readonly parallaxOffset = signal(0);
	protected readonly activeGalleryIndex = signal(0);

	constructor() {
		afterNextRender(() => {
			if (!isPlatformBrowser(this._platformId)) {
				return;
			}

			const onScroll = () => {
				this.parallaxOffset.set(Math.min(window.scrollY * 0.35, 180));
			};

			onScroll();
			window.addEventListener('scroll', onScroll, { passive: true });
			this._destroyRef.onDestroy(() => window.removeEventListener('scroll', onScroll));

			const galleryTimer = window.setInterval(() => {
				this.activeGalleryIndex.update((index) => (index + 1) % this.gallery.length);
			}, 5000);

			this._destroyRef.onDestroy(() => window.clearInterval(galleryTimer));
		});
	}

	protected setGalleryIndex(index: number): void {
		this.activeGalleryIndex.set(index);
	}

	protected trackNews(_index: number, item: (typeof HOME_NEWS)[number]): string {
		return item.href;
	}

	protected trackGallery(_index: number, item: (typeof HOME_GALLERY)[number]): string {
		return item.src;
	}

	protected trackFeature(_index: number, item: (typeof HOME_FEATURES)[number]): string {
		return item.title;
	}

	protected trackExhibit(_index: number, item: (typeof EXHIBITS)[number]): number {
		return item.id;
	}

	protected trackStat(_index: number, item: (typeof HOME_STATS)[number]): string {
		return item.label;
	}

	protected trackPartner(_index: number, item: (typeof PARTNERS)[number]): string {
		return item.logo;
	}
}
