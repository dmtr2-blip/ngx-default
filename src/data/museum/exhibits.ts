import { MUSEUM_SITE } from '../../app/core/museum.const';

export interface Exhibit {
	id: number;
	name: string;
	description: string;
	image: string;
	years?: string;
	detail?: string;
}

export const EXHIBITS: Exhibit[] = [
	{
		id: 2,
		name: 'Ігор Сікорський',
		description:
			'Видатний авіаконструктор. Творець першого у світі чотиримоторного літака, важкого чотиримоторного бомбардувальника і пасажирського літака трансатлантичного гідроплана, серійного гелікоптера одногвинтової схеми.',
		image: `${MUSEUM_SITE}/media/person_images/1_1437.jpg`,
		years: '1889 – 1972',
		detail:
			'Видатний авіаконструктор українського походження, що працював у Російській імперії та США. Творець «Руського витязя» (1913), «Іллі Муромця» (1914), трансатлантичного гідроплана (1934) та серійного гелікоптера (1942). Народився в Києві, 1918 року емігрував, у 1923 році заснував Sikorsky Aircraft у США.',
	},
	{
		id: 3,
		name: 'Богдан Хмельницький',
		description:
			'Український військовий, політичний та державний діяч. Гетьман Війська Запорозького, очільник Гетьманату.',
		image: `${MUSEUM_SITE}/media/person_images/22_etsy_com_bogdan_hmel_1-kopyya-768x500.jpg`,
		detail:
			'Гетьман Війська Запорозького, талановитий воєначальник і полководець. У 1648–1657 роках підняв українські землі на визвольну війну проти Речі Посполитої, здобув низку великих перемог, що увійшли в історію української державності.',
	},
	{
		id: 6,
		name: 'Княгиня Ольга, або Свята Ольга',
		description:
			'Дружина князя Ігоря I, Київська княгиня, канонізована православною церквою.',
		image: `${MUSEUM_SITE}/media/person_images/olga.png`,
		detail:
			'Мудра та сильна правителька Київської Русі. Помстилась за загибель чоловіка розправою над древлянами, правила Руссю до 962 року. Канонізована православною церквою.',
	},
	{
		id: 7,
		name: 'Костянтин VII Багрянородний',
		description:
			'Візантійський імператор. Автор творів про відносини між Руссю і Візантією у Х столітті.',
		image: `${MUSEUM_SITE}/media/person_images/Constantine_VII_Porphyrogenitus.jpg`,
	},
	{
		id: 8,
		name: 'Логофет дрома',
		description:
			'Чиновник, голова департаменту, відповідального за імперську пошту, дипломатію та розвідку.',
		image: `${MUSEUM_SITE}/media/person_images/250px-SimeonMetaphrastes.jpg`,
	},
	{
		id: 9,
		name: 'Служниця Ольги Малуша',
		description:
			'Дочка древлянського князя Мала, сестра воєводи Добрині Никитича.',
		image: `${MUSEUM_SITE}/media/person_images/220px-%D0%94%D0%BE%D0%B1%D1%80%D1%8B%D0%BD%D1%8F_%D0%9D%D0%B8%D0%BA%D0%B8%D1%82%D0%B8%D1%87.jpg`,
	},
	{
		id: 10,
		name: 'Князь Святослав Хоробрий',
		description:
			'Великий князь Київської Русі з династії Рюриковичів. Син князя Ігоря і його дружини княгині Ольги.',
		image: `${MUSEUM_SITE}/media/person_images/sviatoslav.jpg`,
	},
	{
		id: 13,
		name: 'Князь Володимир Великий',
		description: 'Хреститель України-Руси (988). Батько Ярослава Мудрого.',
		image: `${MUSEUM_SITE}/media/person_images/volodymyr-velikiy-1-min-246x300.jpg`,
	},
	{
		id: 14,
		name: 'Михаїл І, митрополит Київський',
		description:
			'Перший голова Київської митрополії. Охрестив Русь. Мощі у Києво-Печерській Лаврі.',
		image: `${MUSEUM_SITE}/media/person_images/download.jpg`,
	},
	{
		id: 16,
		name: 'Ярослав Мудрий',
		description: 'Великий князь Київський, син Володимира Великого.',
		image: `${MUSEUM_SITE}/media/person_images/dff.jpg`,
	},
];

export const EXHIBIT_IDS = EXHIBITS.map((exhibit) => exhibit.id);

export function getExhibitById(id: number): Exhibit | undefined {
	return EXHIBITS.find((exhibit) => exhibit.id === id);
}
