import { mount } from '@vue/test-utils';
import TimeLine from '@/components/TimeLine/TimeLine.vue';
import TimeLineEvent from '@/components/TimeLine/TimeLineEvent.vue';
import * as TimelineRepository from '@/repositories/TimelineEventsRepository';
import { ImportMock } from 'ts-mock-imports';
import {Event} from '@/repositories/types';

const MockedTimelineRepository = ImportMock.mockClass(TimelineRepository);

const events: Event[] = [
    {
        name: 'Geralt of Rivia',
        text: '',
        condensed: false,
        time: new Date('October 8, 2019 11:13:00'),
        icon: null,
        attachments: [],
    },
    {
        name: 'Yennefer of Vengerberg',
        text: '',
        condensed: true,
        time: new Date('October 8, 2019 16:42:00'),
        icon: null,
        attachments: [],
    },
    {
        name: 'Triss Merigold',
        text: '',
        condensed: true,
        time: new Date('October 9, 2019 11:13:00'),
        icon: null,
        attachments: [],
    },
    {
        name: 'Cirilla',
        text: '',
        condensed: false,
        time: new Date('October 9, 2019 11:47:00'),
        icon: null,
        attachments: [],
    },
    {
        name: 'Emhyr var Emris',
        text: '',
        condensed: true,
        time: new Date('October 10, 2019 11:13:00'),
        icon: null,
        attachments: [],
    },
];

describe('TimeLine.vue', () => {

    beforeEach(() => {
        MockedTimelineRepository.restore();
        MockedTimelineRepository.mock('getEvents', events);
    });

    it('renders a timeline of events from the API', (done) => {

        const wrapper = mount(TimeLine, {
            propsData: {
                timelineEventsRepository: MockedTimelineRepository.getMockInstance(),
            },
        });

        wrapper.vm.$nextTick(() => {

            const pageEvents = wrapper.findAll(TimeLineEvent);
            expect(pageEvents).toHaveLength(5);
            events.forEach((event) => {
                expect(wrapper.text()).toContain(event.name);
            });

            done();
        });
    });

    it('changes event direction after an uncondensed event', (done) => {

        const wrapper = mount(TimeLine, {
            propsData: {
                timelineEventsRepository: MockedTimelineRepository.getMockInstance(),
            },
        });

        wrapper.vm.$nextTick(() => {

            let expectation = 'right';
            const pageEvents = wrapper.findAll(TimeLineEvent);

            for (let i = 0; i < pageEvents.length; i++) {
                if (! pageEvents.at(i).vm.$props.condensed) {
                    expectation = (expectation === 'right' ? 'left' : 'right');
                }

                expect(pageEvents.at(i).vm.$props.direction).toBe(expectation);
            }

            done();
        });
    });
});
