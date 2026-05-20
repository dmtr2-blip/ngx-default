import { RenderMode, ServerRoute } from '@angular/ssr';
import { EXHIBIT_IDS } from '../data/museum/exhibits';

const HISTORY_ERA_IDS = ['3', '4'];

export const serverRoutes: ServerRoute[] = [
	{
		path: 'person/:id',
		renderMode: RenderMode.Prerender,
		getPrerenderParams: async () => EXHIBIT_IDS.map((id) => ({ id: String(id) })),
	},
	{
		path: 'history/:id',
		renderMode: RenderMode.Prerender,
		getPrerenderParams: async () => HISTORY_ERA_IDS.map((id) => ({ id })),
	},
	{
		path: '**',
		renderMode: RenderMode.Prerender,
	},
];
