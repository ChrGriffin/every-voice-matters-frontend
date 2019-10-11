import TimelineApi from '@/services/api/TimelineApi.ts';

describe('TimelineApi.ts', () => {
    it('can be constructed with an api token', () => {
        const api = new TimelineApi('token');
        expect(api).toBeInstanceOf(TimelineApi);
    });

    it('returns an array of events', () => {
        const api = new TimelineApi('token');
        const events = api.getEvents();

        expect(events.length).toBeGreaterThan(0);
    });
});
