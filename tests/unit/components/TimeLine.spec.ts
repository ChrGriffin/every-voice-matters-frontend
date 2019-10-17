import { shallowMount } from '@vue/test-utils';
import TimeLine from '@/components/TimeLine.vue';
import * as TimelineApi from '@/services/api/TimelineApi';
import { ImportMock } from 'ts-mock-imports';

const MockedTimelineApi = ImportMock.mockClass(TimelineApi);

const events = [
    {
        name: 'Geralt of Rivia',
        text: '',
        condensed: false,
        time: new Date('October 8, 2019 11:13:00'),
    },
    {
        name: 'Yennefer of Vengerberg',
        text: '',
        condensed: true,
        time: new Date('October 8, 2019 16:42:00'),
    },
    {
        name: 'Triss Merigold',
        text: '',
        condensed: true,
        time: new Date('October 9, 2019 11:13:00'),
    },
];

describe('TimeLine.vue', () => {
    beforeEach(() => {
        MockedTimelineApi.restore();
    });

    it('renders a timeline of events from the API', (done) => {

        MockedTimelineApi.mock('getEvents', events);

        const wrapper = shallowMount(TimeLine, {
            propsData: {
                timelineApi: MockedTimelineApi.getMockInstance(),
            },
        });

        wrapper.vm.$nextTick(() => {
            const pageEvents = wrapper.findAll('div.event');
            expect(pageEvents).toHaveLength(3);
            events.forEach((event) => {
                expect(wrapper.text()).toContain(event.name);
            });

            done();
        });
    });
});
