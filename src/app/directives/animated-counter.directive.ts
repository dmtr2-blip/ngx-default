import { isPlatformBrowser } from '@angular/common';
import {
	AfterViewInit,
	Directive,
	ElementRef,
	inject,
	input,
	OnDestroy,
	PLATFORM_ID,
} from '@angular/core';

@Directive({
	selector: '[appAnimatedCounter]',
})
export class AnimatedCounterDirective implements AfterViewInit, OnDestroy {
	readonly target = input.required<number>({ alias: 'appAnimatedCounter' });
	readonly durationMs = input(1400);

	private readonly _element = inject(ElementRef<HTMLElement>);
	private readonly _platformId = inject(PLATFORM_ID);
	private _observer?: IntersectionObserver;
	private _frameId = 0;

	ngAfterViewInit(): void {
		const element = this._element.nativeElement;
		element.textContent = '0';

		if (!isPlatformBrowser(this._platformId)) {
			element.textContent = String(this.target());
			return;
		}

		this._observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (!entry.isIntersecting) {
						continue;
					}

					this._animate();
					this._observer?.unobserve(element);
				}
			},
			{ threshold: 0.35 },
		);

		this._observer.observe(element);
	}

	ngOnDestroy(): void {
		this._observer?.disconnect();

		if (isPlatformBrowser(this._platformId) && typeof cancelAnimationFrame === 'function') {
			cancelAnimationFrame(this._frameId);
		}
	}

	private _animate(): void {
		const element = this._element.nativeElement;
		const target = this.target();
		const start = performance.now();
		const duration = this.durationMs();

		const tick = (now: number) => {
			const progress = Math.min((now - start) / duration, 1);
			const eased = 1 - Math.pow(1 - progress, 3);
			element.textContent = String(Math.round(target * eased));

			if (progress < 1) {
				this._frameId = requestAnimationFrame(tick);
			}
		};

		this._frameId = requestAnimationFrame(tick);
	}
}
