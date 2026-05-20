import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, effect, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LanguageService } from '@wawjs/ngx-translate';
import { environment } from '../environments/environment';
import { ScrollTopComponent } from './components/scroll-top/scroll-top.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HeaderComponent } from './layouts/header/header.component';

@Component({
	selector: 'app-root',
	imports: [RouterOutlet, HeaderComponent, FooterComponent, ScrollTopComponent],
	template: `
		<div class="flex min-h-screen flex-col">
			<app-header />
			<main class="flex-1">
				<router-outlet />
			</main>
			<app-footer />
			<app-scroll-top />
		</div>
	`,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
	private readonly _document = inject(DOCUMENT);
	private readonly _languageService = inject(LanguageService);

	constructor() {
		effect(() => {
			const language = this._languageService.language();
			const htmlLang =
				environment.languages.find((item) => item.code === language)?.htmlLang ?? 'uk';

			this._document.documentElement.lang = htmlLang;
		});
	}
}
