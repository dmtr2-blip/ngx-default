import { LANGUAGES } from '../app/feature/language/language.const';

export type AppLanguage = {
	code: string;
	name: string;
	nativeName: string;
	flagSrc: string;
	htmlLang: string;
	population: number;
};

const languages: AppLanguage[] = LANGUAGES.map((language) => ({
	code: language.code,
	name: language.label,
	nativeName: language.label,
	flagSrc: language.flagSrc,
	htmlLang: language.htmlLang,
	population: language.population,
}));

export const environment: {
	apiUrl: string;
	appVersion: string;
	production: boolean;
	companyId: string;
	defaultLanguage: string;
	languages: AppLanguage[];
} = {
	apiUrl: 'https://it.webart.work',
	appVersion: '1.0.0',
	production: true,
	companyId: 'museumsun',
	defaultLanguage: 'ua',
	languages,
};
