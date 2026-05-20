import { isPlatformBrowser, NgTemplateOutlet } from '@angular/common';
import {
	afterNextRender,
	ChangeDetectionStrategy,
	Component,
	computed,
	DestroyRef,
	inject,
	PLATFORM_ID,
	signal,
} from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import { PageHeroComponent } from '../../layouts/page-hero/page-hero.component';
import { MUSEUM_IMAGES } from '../../core/museum.const';
import { museumUrl, PAGE_SOURCE_PATHS } from '../../core/museum-urls';
import { MUSEUM_PAGES } from '../../../data/museum/pages';
import type { PageCard, PageLink, PageSection } from '../../../data/museum/page-types';

@Component({
	selector: 'app-content-page',
	imports: [NgTemplateOutlet, RouterLink, ScrollRevealDirective, PageHeroComponent],
	templateUrl: './content-page.component.html',
	styleUrl: './content-page.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContentPageComponent {
	private readonly _route = inject(ActivatedRoute);
	private readonly _platformId = inject(PLATFORM_ID);
	private readonly _destroyRef = inject(DestroyRef);

	protected readonly pageKey = computed(
		() => this._route.snapshot.data['pageKey'] as string | undefined,
	);
	protected readonly content = computed(() => {
		const key = this.pageKey();
		return key ? MUSEUM_PAGES[key] : undefined;
	});

	protected readonly sourceUrl = computed(() => {
		const key = this.pageKey();
		if (!key) {
			return undefined;
		}
		const path = PAGE_SOURCE_PATHS[key];
		return path ? museumUrl(path) : undefined;
	});

	protected readonly heroImage = computed(
		() => this.content()?.heroImage ?? MUSEUM_IMAGES.expo,
	);

	protected readonly galleryImages = computed(() => {
		const gallery = this.content()?.gallery;
		return gallery && gallery.length >= 2 ? gallery : [];
	});

	protected readonly activeGalleryIndex = signal(0);

	constructor() {
		afterNextRender(() => {
			if (!isPlatformBrowser(this._platformId)) {
				return;
			}

			const galleryTimer = window.setInterval(() => {
				const images = this.galleryImages();
				if (images.length < 2) {
					return;
				}
				this.activeGalleryIndex.update((index) => (index + 1) % images.length);
			}, 6000);

			this._destroyRef.onDestroy(() => window.clearInterval(galleryTimer));
		});
	}

	protected trackParagraph(_index: number, paragraph: string): string {
		return paragraph;
	}

	protected trackSection(_index: number, section: PageSection): string {
		return section.title ?? String(_index);
	}

	protected trackListItem(_index: number, item: string): string {
		return item;
	}

	protected trackCard(_index: number, card: PageCard): string {
		return card.title;
	}

	protected trackLink(_index: number, link: PageLink): string {
		return link.href ?? link.label;
	}

	protected trackRow(_index: number, row: string[]): string {
		return row.join('|');
	}

	protected trackGalleryImage(_index: number, src: string): string {
		return src;
	}

	protected setGalleryIndex(index: number): void {
		this.activeGalleryIndex.set(index);
	}

	protected isExternal(link: PageLink): boolean {
		return link.external ?? (link.href?.startsWith('http') ?? false);
	}

	protected hasLinkTarget(link: PageLink): boolean {
		return !!link.href;
	}

	protected sectionUsesCollapsible(section: PageSection): boolean {
		return section.collapsible === true && (section.list?.length ?? 0) > 4;
	}

	protected isPosterList(section: PageSection): boolean {
		return this.pageKey() === 'posters' && !!section.links?.length && !section.cards?.length;
	}

	protected isEducationGrid(section: PageSection): boolean {
		const cards = section.cards ?? [];
		return cards.length > 0 && cards.every((card) => !card.image && !card.description);
	}
}
