import { DOCUMENT } from '@angular/common';
import {
	ChangeDetectionStrategy,
	Component,
	effect,
	inject,
	input,
} from '@angular/core';
import { MUSEUM_SITE, TICKET_URL } from '../../core/museum.const';

@Component({
	selector: 'app-museum-schema',
	template: '',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MuseumSchemaComponent {
	private readonly _document = inject(DOCUMENT);

	readonly name = input.required<string>();
	readonly description = input.required<string>();
	readonly image = input.required<string>();

	constructor() {
		effect(() => {
			const head = this._document.head;
			const existing = this._document.getElementById('museum-json-ld');
			existing?.remove();

			const script = this._document.createElement('script');
			script.id = 'museum-json-ld';
			script.type = 'application/ld+json';
			script.text = JSON.stringify({
				'@context': 'https://schema.org',
				'@type': 'Museum',
				name: this.name(),
				description: this.description(),
				image: this.image(),
				url: MUSEUM_SITE,
				sameAs: [
					'https://www.facebook.com/MuseumMakingofUkrainianNation/',
					'https://www.instagram.com/museumsun/',
					'https://www.youtube.com/channel/UC1EQbUIBLH-S4thE-Ctv7xw',
				],
				ticketUrl: TICKET_URL,
				address: {
					'@type': 'PostalAddress',
					streetAddress: 'вул. Лаврська, 27',
					addressLocality: 'Київ',
					addressCountry: 'UA',
				},
				telephone: '+380990150452',
				email: 'museumsun@ukr.net',
			});
			head.appendChild(script);
		});
	}
}
