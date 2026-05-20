export interface PageLink {

	label: string;

	href?: string;

	external?: boolean;

}



export interface PageCard {

	title: string;

	description?: string;

	meta?: string;

	image?: string;

	href?: string;

	external?: boolean;

}



export interface PageSection {

	title?: string;

	image?: string;

	paragraphs?: string[];

	list?: string[];

	listTitle?: string;

	collapsible?: boolean;

	table?: PageTable;

	cards?: PageCard[];

	links?: PageLink[];

	highlight?: string;

}



export interface PageTable {

	caption?: string;

	headers: string[];

	rows: string[][];

}



/** minimal — типографічний заголовок; banner — фото лише де це доречно */

export type PageHeroStyle = 'minimal' | 'banner';



export interface MuseumPageContent {

	title: string;

	lead: string;

	heroStyle?: PageHeroStyle;

	heroImage?: string;

	gallery?: readonly string[];

	paragraphs?: string[];

	sections?: PageSection[];

	cta?: PageLink[];

}

