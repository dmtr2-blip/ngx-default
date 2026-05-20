import { describe, expect, it } from 'vitest';
import { FOOTER_LINKS, NAV_LINKS, TICKET_URL } from './museum.const';

describe('museum.const', () => {
	it('exposes main navigation matching museumsun.org', () => {
		const labels = NAV_LINKS.map((link) => link.label);
		expect(labels).toEqual([
			'Про музей',
			'Афіша',
			'Освіта',
			'Відвідувачам',
			'Історія',
			'Контакти',
			'Благодійний фонд',
		]);
	});

	it('uses kontramarka ticket widget', () => {
		expect(TICKET_URL).toContain('kontramarka.ua');
	});

	it('lists footer utility links', () => {
		expect(FOOTER_LINKS.some((link) => link.path === '/presscenter')).toBe(true);
		expect(FOOTER_LINKS.some((link) => link.path === '/donation')).toBe(true);
	});
});
