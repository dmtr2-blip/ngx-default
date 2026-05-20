import { describe, expect, it } from 'vitest';
import { HISTORY_ERA_PAGES } from './history-eras';
import { MUSEUM_PAGES } from './pages';

describe('museum pages', () => {
	it('includes all primary content routes', () => {
		const keys = [
			'aboutmuseum',
			'posters',
			'education',
			'visitors',
			'history',
			'contacts',
			'charity',
			'donation',
			'forpartners',
			'presscenter',
			'values',
			'appeal',
		];
		for (const key of keys) {
			expect(MUSEUM_PAGES[key]?.title).toBeTruthy();
		}
	});

	it('defines cossack and revival era pages', () => {
		expect(HISTORY_ERA_PAGES['3']?.title).toMatch(/КОЗАЦЬКА ДОБА/i);
		expect(HISTORY_ERA_PAGES['4']?.title).toMatch(/ВІДРОДЖЕННЯ НАЦІЇ/i);
	});
});
