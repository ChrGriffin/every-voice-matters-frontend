import TimelineEventsRepository from '@/services/repositories/TimelineApi.ts';

describe('TimelineApi.ts', () => {
    it('returns an array of events', () => {
        const api = new TimelineEventsRepository();
        const events = api.getEvents();

        expect(events.length).toBeGreaterThan(0);
    });
});
