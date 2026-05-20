import { isPlatformBrowser } from '@angular/common';
import {
	AfterViewInit,
	Directive,
	ElementRef,
	inject,
	OnDestroy,
	PLATFORM_ID,
	Renderer2,
} from '@angular/core';

@Directive({
	selector: '[appScrollReveal]',
})
export class ScrollRevealDirective implements AfterViewInit, OnDestroy {
	private readonly _element = inject(ElementRef<HTMLElement>);
	private readonly _renderer = inject(Renderer2);
	private readonly _platformId = inject(PLATFORM_ID);
	private _observer?: IntersectionObserver;

	ngAfterViewInit(): void {
		const element = this._element.nativeElement;
		this._renderer.addClass(element, 'reveal-hidden');

		if (!isPlatformBrowser(this._platformId)) {
			this._renderer.removeClass(element, 'reveal-hidden');
			this._renderer.addClass(element, 'reveal-visible');
			return;
		}

		this._observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (!entry.isIntersecting) {
						continue;
					}

					this._renderer.removeClass(element, 'reveal-hidden');
					this._renderer.addClass(element, 'reveal-visible');
					this._observer?.unobserve(element);
				}
			},
			{ threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
		);

		this._observer.observe(element);
	}

	ngOnDestroy(): void {
		this._observer?.disconnect();
	}
}
