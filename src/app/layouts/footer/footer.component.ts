import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FOOTER_LINKS, MUSEUM_IMAGES, SOCIAL_LINKS, TICKET_URL } from '../../core/museum.const';

@Component({
	selector: 'app-footer',
	imports: [RouterLink],
	templateUrl: './footer.component.html',
	styleUrl: './footer.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
	protected readonly logoUrl = MUSEUM_IMAGES.logo;
	protected readonly ticketUrl = TICKET_URL;
	protected readonly socialLinks = SOCIAL_LINKS;
	protected readonly footerLinks = FOOTER_LINKS;
	protected readonly copyrightStartYear = 2017;
	protected readonly copyrightYear = new Date().getFullYear();

	protected trackSocial(_index: number, link: (typeof SOCIAL_LINKS)[number]): string {
		return link.href;
	}
}
