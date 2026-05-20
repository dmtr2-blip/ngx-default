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

@Component({
	selector: 'app-scroll-top',
	template: `
		@if (visible()) {
			<button
				type="button"
				class="scroll-top theme-focus theme-interactive"
				aria-label="Прокрутити на початок сторінки"
				(click)="scrollToTop()"
			>
				<span class="material-symbols-outlined" aria-hidden="true">keyboard_arrow_up</span>
			</button>
		}
	`,
	styleUrl: './scroll-top.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScrollTopComponent {
	private readonly _platformId = inject(PLATFORM_ID);
	private readonly _destroyRef = inject(DestroyRef);

	protected readonly visible = signal(false);

	constructor() {
		afterNextRender(() => {
			if (!isPlatformBrowser(this._platformId)) {
				return;
			}

			const onScroll = () => {
				this.visible.set(window.scrollY > 480);
			};

			onScroll();
			window.addEventListener('scroll', onScroll, { passive: true });
			this._destroyRef.onDestroy(() => window.removeEventListener('scroll', onScroll));
		});
	}

	protected scrollToTop(): void {
		if (!isPlatformBrowser(this._platformId)) {
			return;
		}

		window.scrollTo({ top: 0, behavior: 'smooth' });
	}
}
