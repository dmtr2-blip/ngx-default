import { MUSEUM_SITE } from '../../app/core/museum.const';

export interface Partner {
	name: string;
	logo: string;
	href?: string;
}

export const PARTNERS: Partner[] = [
	{ name: 'Музей НМІУ', logo: '/media/partner_images/logo_museum_NMHUSWW_ukr.png' },
	{ name: 'Партнер 2', logo: '/media/partner_images/2.png' },
	{ name: 'УІНР', logo: '/media/partner_images/UINR_logo-02.jpg' },
	{ name: 'НМІУ', logo: '/media/partner_images/%D0%BB%D0%BE%D0%B3%D0%BE%D0%9D%D0%9C%D0%86%D0%A3_160%D0%A5160.jpg' },
	{ name: 'Гвардія', logo: '/media/partner_images/gwardia13.png' },
	{ name: 'Чигирин', logo: '/media/partner_images/%D0%A7%D0%B8%D0%B3%D0%B8%D1%80%D0%B8%D0%BD_%D0%9B%D0%9E%D0%93%D0%9E_%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B0_1.jpg' },
	{ name: 'Gestors', logo: '/media/partner_images/Logo-Gestors-signature.jpg' },
	{ name: 'Дія', logo: '/media/partner_images/%D0%BB%D0%BE%D0%B3%D0%BE_%D0%94%D0%86%D0%AF.png' },
	{ name: 'Рідна', logo: '/media/partner_images/ridna-logo-old.jpg' },
	{ name: 'WARTA', logo: '/media/partner_images/Logo_WARTA.png' },
	{ name: 'Серце кіборгів', logo: '/media/partner_images/LOGO_vector_serciaKiborgiv1.png' },
	{ name: 'Brothers in UA', logo: '/media/partner_images/2__%D0%BB%D0%BE%D0%B3%D0%BE_brothers.in.ua.png' },
	{ name: 'Еспресо', logo: '/media/partner_images/espreso.png' },
	{ name: 'Воїн світла', logo: '/media/partner_images/Logo_voin_svitla.png' },
	{ name: 'День вишиванки', logo: '/media/partner_images/Logo_den_vyshyvanky1.jpg' },
].map((partner) => ({
	...partner,
	logo: `${MUSEUM_SITE}${partner.logo}`,
}));
