import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import { PageHeroComponent } from '../../layouts/page-hero/page-hero.component';
import { museumPersonUrl } from '../../core/museum-urls';
import { EXHIBITS, getExhibitById } from '../../../data/museum/exhibits';

@Component({
	selector: 'app-person-page',
	imports: [RouterLink, ScrollRevealDirective, PageHeroComponent],
	templateUrl: './person-page.component.html',
	styleUrl: './person-page.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonPageComponent {
	private readonly _route = inject(ActivatedRoute);

	protected readonly personId = computed(() => Number(this._route.snapshot.paramMap.get('id')));
	protected readonly exhibit = computed(() => getExhibitById(this.personId()));
	protected readonly sourceUrl = computed(() => {
		const id = this.personId();
		return Number.isFinite(id) ? museumPersonUrl(id) : undefined;
	});
	protected readonly related = computed(() =>
		EXHIBITS.filter((item) => item.id !== this.personId()).slice(0, 4),
	);

	protected trackRelated(_index: number, item: (typeof EXHIBITS)[number]): number {
		return item.id;
	}
}
