import { LanguageOption } from './language.interface';

export const LANGUAGES: (LanguageOption & { population: number })[] = [
	{
		code: 'ua',
		label: 'УКР',
		flagSrc: 'flags/ukraine.svg',
		htmlLang: 'uk',
		population: 35,
	},
	{
		code: 'en',
		label: 'EN',
		flagSrc: 'flags/united-kingdom.svg',
		htmlLang: 'en',
		population: 280,
	},
];
