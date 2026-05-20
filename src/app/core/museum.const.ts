export const MUSEUM_SITE = 'https://www.museumsun.org';

export const TICKET_URL =

	'https://widget.kontramarka.ua/uk/widget301site11726/widget/index';

export const MAP_EMBED_URL =

	'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2541.7822902825333!2d30.55986691573048!3d50.426527779472025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTDCsDI1JzM1LjUiTiAzMMKwMzMnNDMuNCJF!5e0!3m2!1suk!2sua!4v1565209424940!5m2!1suk!2sua';



export const MUSEUM_IMAGES = {

	logo: `${MUSEUM_SITE}/static/images/logo.jpg`,

	hero: `${MUSEUM_SITE}/static/images/Main_page_805_715.jpg`,

	bayda: `${MUSEUM_SITE}/static/images/bayda.png`,

	values: `${MUSEUM_SITE}/static/images/koz.png`,

	expo: `${MUSEUM_SITE}/media/slide_images/Main_page_1310_797_UbQWEHG.jpg`,

	founder: `${MUSEUM_SITE}/media/slide_images/slide_vlad_Jtyfiv7.jpg`,

	gallery: [

		`${MUSEUM_SITE}/media/slide_images/Main_page_1310_797_UbQWEHG.jpg`,

		`${MUSEUM_SITE}/media/slide_images/slide_vlad_Jtyfiv7.jpg`,

		`${MUSEUM_SITE}/media/slide_images/2%D0%9A%D0%9D_%D0%9E%D0%9B%D0%AC%D0%93%D0%90.jpg`,

	],

	pressNews: `${MUSEUM_SITE}/static/images/news.jpg`,

	pressMedia: `${MUSEUM_SITE}/static/images/media.jpg`,

} as const;



export const SOCIAL_LINKS = [

	{ label: 'Telegram', href: 'https://t.me/museumsun', icon: 'telegram' },

	{

		label: 'Facebook',

		href: 'https://www.facebook.com/MuseumMakingofUkrainianNation/',

		icon: 'facebook',

	},

	{ label: 'Instagram', href: 'https://www.instagram.com/museumsun/', icon: 'instagram' },

	{

		label: 'YouTube',

		href: 'https://www.youtube.com/channel/UC1EQbUIBLH-S4thE-Ctv7xw',

		icon: 'youtube',

	},

	{ label: 'TikTok', href: 'https://vm.tiktok.com/V8vYjk/', icon: 'tiktok' },

	{

		label: 'TripAdvisor',

		href: 'https://tripadvisor.ru/Profile/MuseumMakingofUkrain',

		icon: 'tripadvisor',

	},

] as const;



export const NAV_LINKS = [

	{ label: 'Про музей', path: '/aboutmuseum' },

	{ label: 'Афіша', path: '/posters' },

	{ label: 'Освіта', path: '/education' },

	{ label: 'Відвідувачам', path: '/visitors' },

	{ label: 'Історія', path: '/history' },

	{ label: 'Контакти', path: '/contacts' },

	{ label: 'Благодійний фонд', path: '/charity' },

] as const;

export const FOOTER_LINKS = [
	{ label: 'Прес-центр', path: '/presscenter' },
	{ label: 'Партнерам', path: '/forpartners' },
	{ label: 'Наші цінності', path: '/values' },
	{ label: 'Звернення засновника', path: '/appeal' },
	{ label: 'Підтримайте нас', path: '/donation' },
] as const;

