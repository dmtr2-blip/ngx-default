import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import { PageHeroComponent } from '../../layouts/page-hero/page-hero.component';
import { museumUrl, HISTORY_ERA_SOURCE_PATHS } from '../../core/museum-urls';
import { HISTORY_ERA_PAGES } from '../../../data/museum/history-eras';
import type { PageLink, PageSection } from '../../../data/museum/page-types';

@Component({
	selector: 'app-history-era-page',
	imports: [PageHeroComponent, RouterLink, ScrollRevealDirective],
	templateUrl: './history-era-page.component.html',
	styleUrl: '../content/content-page.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HistoryEraPageComponent {
	private readonly _route = inject(ActivatedRoute);

	protected readonly eraId = computed(() => this._route.snapshot.paramMap.get('id') ?? '');
	protected readonly content = computed(() => HISTORY_ERA_PAGES[this.eraId()]);
	protected readonly sourceUrl = computed(() => {
		const path = HISTORY_ERA_SOURCE_PATHS[this.eraId()];
		return path ? museumUrl(path) : undefined;
	});

	protected trackParagraph(_index: number, paragraph: string): string {
		return paragraph;
	}

	protected trackSection(_index: number, section: PageSection): string {
		return section.title ?? String(_index);
	}

	protected trackLink(_index: number, link: PageLink): string {
		return link.href ?? link.label;
	}

	protected isExternal(link: PageLink): boolean {
		return link.external ?? (link.href?.startsWith('http') ?? false);
	}

	protected hasLinkTarget(link: PageLink): boolean {
		return !!link.href;
	}
}
