import { describe, expect, it } from 'vitest';
import { EXHIBITS, EXHIBIT_IDS, getExhibitById } from './exhibits';

describe('exhibits', () => {
	it('exports stable exhibit ids for prerender', () => {
		expect(EXHIBIT_IDS.length).toBe(EXHIBITS.length);
		expect(EXHIBIT_IDS).toContain(2);
		expect(EXHIBIT_IDS).toContain(16);
	});

	it('resolves exhibit by id', () => {
		const sikorsky = getExhibitById(2);
		expect(sikorsky?.name).toBe('Ігор Сікорський');
	});

	it('returns undefined for unknown id', () => {
		expect(getExhibitById(999)).toBeUndefined();
	});
});
