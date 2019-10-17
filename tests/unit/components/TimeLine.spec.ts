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
    {
        name: 'Cirilla',
        text: '',
        condensed: false,
        time: new Date('October 9, 2019 11:47:00'),
    },
    {
        name: 'Emhyr var Emris',
        text: '',
        condensed: true,
        time: new Date('October 10, 2019 11:13:00'),
    },
];

describe('TimeLine.vue', () => {

    beforeEach(() => {
        MockedTimelineApi.restore();
        MockedTimelineApi.mock('getEvents', events);
    });

    it('renders a timeline of events from the API', (done) => {

        const wrapper = shallowMount(TimeLine, {
            propsData: {
                timelineApi: MockedTimelineApi.getMockInstance(),
            },
        });

        wrapper.vm.$nextTick(() => {
            const pageEvents = wrapper.findAll('div.event');
            expect(pageEvents).toHaveLength(5);
            events.forEach((event) => {
                expect(wrapper.text()).toContain(event.name);
            });

            done();
        });
    });

    it('displays events as condensed or not', (done) => {

        const wrapper = shallowMount(TimeLine, {
            propsData: {
                timelineApi: MockedTimelineApi.getMockInstance(),
            },
        });

        wrapper.vm.$nextTick(() => {
            const condensedEvents = wrapper.findAll('div.event.condensed');
            expect(condensedEvents).toHaveLength(3);

            const nonCondensedEvents = wrapper.findAll('div.event')
                .filter((event) => {
                    return ! event.classes().includes('condensed');
                });
            expect(nonCondensedEvents).toHaveLength(2);

            done();
        });
    });

    it('changes event direction after an uncondensed event', (done) => {

        const wrapper = shallowMount(TimeLine, {
            propsData: {
                timelineApi: MockedTimelineApi.getMockInstance(),
            },
        });

        wrapper.vm.$nextTick(() => {

            let expectation = 'right';
            const pageEvents = wrapper.findAll('div.event');

            for (let i = 0; i < pageEvents.length; i++) {
                if (! pageEvents.at(i).classes().includes('condensed')) {
                    expectation = (expectation === 'right' ? 'left' : 'right');
                }

                expect(pageEvents.at(i).classes()).toContain(expectation);
            }

            done();
        });
    });
});
