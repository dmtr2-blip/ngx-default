import { isPlatformBrowser } from '@angular/common';
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
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { filter } from 'rxjs';
import { LanguageService, TranslateService } from '@wawjs/ngx-translate';
import { ThemeService } from '@wawjs/ngx-ui';
import { MUSEUM_IMAGES, NAV_LINKS, TICKET_URL } from '../../core/museum.const';

@Component({
	selector: 'app-header',
	imports: [RouterLink, RouterLinkActive],
	templateUrl: './header.component.html',
	styleUrl: './header.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
	private readonly _languageService = inject(LanguageService);
	private readonly _translateService = inject(TranslateService);
	private readonly _themeService = inject(ThemeService);
	private readonly _router = inject(Router);
	private readonly _destroyRef = inject(DestroyRef);
	private readonly _platformId = inject(PLATFORM_ID);

	protected readonly navLinks = NAV_LINKS;
	protected readonly ticketUrl = TICKET_URL;
	protected readonly logoUrl = MUSEUM_IMAGES.logo;
	protected readonly menuOpen = signal(false);
	protected readonly scrolled = signal(false);
	protected readonly mode = computed(() => this._themeService.mode() ?? 'dark');
	protected readonly activeLanguage = this._languageService.language;
	protected readonly languages = computed(() =>
		this._languageService.languages().filter((language) => ['ua', 'en'].includes(language.code)),
	);

	protected readonly toggleIcon = computed(() =>
		this.mode() === 'dark' ? 'light_mode' : 'dark_mode',
	);
	protected readonly toggleLabel = computed(() =>
		this.mode() === 'dark' ? 'Увімкнути світлу тему' : 'Увімкнути темну тему',
	);

	constructor() {
		this._themeService.init();
		if (!this._themeService.mode()) {
			this._themeService.setMode('dark');
		}

		this._router.events
			.pipe(
				filter((event): event is NavigationEnd => event instanceof NavigationEnd),
				takeUntilDestroyed(),
			)
			.subscribe(() => this.closeMenu());

		afterNextRender(() => {
			if (!isPlatformBrowser(this._platformId)) {
				return;
			}

			const onScroll = () => this.scrolled.set(window.scrollY > 24);
			onScroll();
			window.addEventListener('scroll', onScroll, { passive: true });
			this._destroyRef.onDestroy(() => window.removeEventListener('scroll', onScroll));
		});
	}

	protected toggleMenu(): void {
		this.menuOpen.update((open) => !open);
	}

	protected closeMenu(): void {
		this.menuOpen.set(false);
	}

	protected toggleMode(): void {
		const nextMode = this.mode() === 'dark' ? 'light' : 'dark';
		this._themeService.setMode(nextMode);
	}

	protected async setLanguage(code: string): Promise<void> {
		await this._translateService.setLanguage(code);
		await this._router.navigateByUrl(this._router.url);
		this.closeMenu();
	}

	protected trackNavLink(_index: number, link: (typeof NAV_LINKS)[number]): string {
		return link.path;
	}

	protected trackLanguage(_index: number, language: { code: string }): string {
		return language.code;
	}
}
