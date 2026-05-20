import { Routes } from '@angular/router';

const museumMeta = {
	titleSuffix: ' | Музей',
	robots: 'index, follow',
};

const contentRoute = (path: string, pageKey: string, title: string) => ({
	path,
	data: {
		pageKey,
		meta: {
			...museumMeta,
			title,
			description: `${title} — музей «Історія становлення української нації».`,
		},
	},
	loadComponent: () =>
		import('./pages/content/content-page.component').then((m) => m.ContentPageComponent),
});

export const routes: Routes = [
	{
		path: '',
		data: {
			meta: {
				title: 'Історія становлення української нації',
				titleSuffix: '',
				description:
					'Музей «Історія становлення української нації» — 110 експонатів, 25 сюжетів з 5D-ефектами, медіагід 8-ма мовами.',
				robots: 'index, follow',
			},
		},
		loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent),
	},
	contentRoute('aboutmuseum', 'aboutmuseum', 'Про музей'),
	contentRoute('posters', 'posters', 'Афіша'),
	contentRoute('education', 'education', 'Освіта'),
	contentRoute('visitors', 'visitors', 'Відвідувачам'),
	contentRoute('history', 'history', 'Історія'),
	{
		path: 'history/:id',
		data: {
			meta: {
				...museumMeta,
				title: 'Історична епоха',
			},
		},
		loadComponent: () =>
			import('./pages/history-era/history-era-page.component').then(
				(m) => m.HistoryEraPageComponent,
			),
	},
	contentRoute('contacts', 'contacts', 'Контакти'),
	contentRoute('charity', 'charity', 'Благодійний фонд'),
	contentRoute('donation', 'donation', 'Підтримайте нас'),
	contentRoute('forpartners', 'forpartners', 'Партнерам'),
	contentRoute('presscenter', 'presscenter', 'Прес-центр'),
	contentRoute('values', 'values', 'Наші цінності'),
	contentRoute('appeal', 'appeal', 'Звернення засновника'),
	{
		path: 'person/:id',
		data: {
			meta: {
				...museumMeta,
				title: 'Експонат',
			},
		},
		loadComponent: () =>
			import('./pages/person/person-page.component').then((m) => m.PersonPageComponent),
	},
	{
		path: '**',
		redirectTo: '',
	},
];
