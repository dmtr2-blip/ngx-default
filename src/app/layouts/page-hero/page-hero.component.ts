import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TICKET_URL } from '../../core/museum.const';

@Component({
	selector: 'app-page-hero',
	imports: [NgTemplateOutlet, RouterLink],
	templateUrl: './page-hero.component.html',
	styleUrl: './page-hero.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageHeroComponent {
	readonly title = input.required<string>();
	readonly lead = input<string>('');
	readonly heroImage = input<string | undefined>();
	readonly sourceUrl = input<string | undefined>();
	readonly breadcrumbLabel = input<string | undefined>();
	readonly breadcrumbHref = input<string | undefined>();

	protected readonly ticketUrl = TICKET_URL;
}
