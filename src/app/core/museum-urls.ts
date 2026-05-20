import { MUSEUM_SITE } from './museum.const';
import type { PageLink } from '../../data/museum/page-types';

export function museumUrl(path: string): string {
	const normalized = path.startsWith('/') ? path : `/${path}`;
	return `${MUSEUM_SITE}${normalized}${normalized.endsWith('/') ? '' : '/'}`;
}

export function museumPersonUrl(id: number): string {
	return museumUrl(`/person/${id}`);
}

/** Шляхи сторінок на оригінальному сайті */
export const PAGE_SOURCE_PATHS: Record<string, string> = {
	aboutmuseum: '/aboutmuseum/',
	posters: '/posters/',
	education: '/education/',
	visitors: '/visitors/',
	history: '/history/',
	contacts: '/contacts/',
	charity: '/charity/',
	donation: '/donation/',
	forpartners: '/forpartners/',
	presscenter: '/presscenter/',
	values: '/values/',
	appeal: '/appeal/',
};

export const HISTORY_ERA_SOURCE_PATHS: Record<string, string> = {
	'3': '/history/3/',
	'4': '/history/4/',
};

export const POSTER_LINKS: PageLink[] = [
	{ label: 'Нащадки Агати Ярославни', href: museumUrl('/posters/44'), external: true },
	{ label: 'Нащадки Анастасії Ярославни', href: museumUrl('/posters/45'), external: true },
	{ label: 'Нащадки Анни Ярославни', href: museumUrl('/posters/46'), external: true },
	{ label: 'Нащадки Єлизавети Ярославни', href: museumUrl('/posters/47'), external: true },
	{
		label: "Зародження слов'ян. Розбудова міст Русі",
		href: museumUrl('/posters/48'),
		external: true,
	},
	{
		label: 'Князь-воїн Святослав Хоробрий',
		href: museumUrl('/posters/49'),
		external: true,
	},
	{
		label: 'Могутня держава князя Ярослава Мудрого',
		href: museumUrl('/posters/50'),
		external: true,
	},
	{
		label: 'Данило Романович — король України-Руси',
		href: museumUrl('/posters/51'),
		external: true,
	},
	{
		label: 'Князь Костянтин Острозький',
		href: museumUrl('/posters/52'),
		external: true,
	},
	{
		label: 'Дмитро «Байда» Вишневецький',
		href: museumUrl('/posters/53'),
		external: true,
	},
	{
		label: 'Петро Конашевич-Сагайдачний',
		href: museumUrl('/posters/54'),
		external: true,
	},
	{
		label: 'Гетьман Богдан Хмельницький',
		href: museumUrl('/posters/55'),
		external: true,
	},
	{ label: 'Віденська битва', href: museumUrl('/posters/56'), external: true },
	{
		label: 'Іван Мазепа та Пилип Орлик',
		href: museumUrl('/posters/57'),
		external: true,
	},
	{ label: 'Духовні творці України', href: museumUrl('/posters/58'), external: true },
	{
		label: 'Українська Народна Республіка',
		href: museumUrl('/posters/59'),
		external: true,
	},
	{
		label: 'Визвольний рух у XX столітті',
		href: museumUrl('/posters/60'),
		external: true,
	},
	{ label: 'Великі українці', href: museumUrl('/posters/61'), external: true },
	{ label: 'Великі українці', href: museumUrl('/posters/62'), external: true },
	{
		label: 'Українські діячі — патріоти',
		href: museumUrl('/posters/63'),
		external: true,
	},
	{
		label: 'Героїчна оборона Донецького аеропорту',
		href: museumUrl('/posters/64'),
		external: true,
	},
	{ label: 'Передова АТО', href: museumUrl('/posters/65'), external: true },
	{
		label: 'Відомі українські сучасники',
		href: museumUrl('/posters/66'),
		external: true,
	},
	{ label: "Розселення слов'ян", href: museumUrl('/posters/67'), external: true },
	{
		label: 'Україна — європейська держава',
		href: museumUrl('/posters/68'),
		external: true,
	},
	{
		label: 'Звернення Валерія Галана',
		href: `${MUSEUM_SITE}/blog/236/`,
		external: true,
	},
];
