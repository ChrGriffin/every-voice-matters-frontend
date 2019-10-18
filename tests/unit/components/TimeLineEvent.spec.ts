import { shallowMount } from '@vue/test-utils';
import TimeLineEvent from '@/components/TimeLineEvent.vue';
import { Direction } from '@/components/types';

const props = {
    name: 'Geralt of Rivia',
    text: '',
    condensed: false,
    direction: Direction.left,
    date: new Date('October 8, 2019 00:00:00 EST'),
    urls: [],
    images: []
};

describe('TimeLineEvent.vue', () => {

    it('displays as condensed or not', () => {

        const condensedWrapper = shallowMount(TimeLineEvent, {
            propsData: {
                name: props.name,
                text: props.text,
                condensed: true,
                direction: props.direction,
                date: props.date,
                urls: props.urls,
                images: props.images,
            },
        });

        const nonCondensedWrapper = shallowMount(TimeLineEvent, {
            propsData: {
                name: props.name,
                text: props.text,
                condensed: false,
                direction: props.direction,
                date: props.date,
                urls: props.urls,
                images: props.images,
            },
        });

        expect(condensedWrapper.element.classList.contains('condensed')).toBe(true);
        expect(nonCondensedWrapper.element.classList.contains('condensed')).toBe(false);
    });

    it('displays on the left or the right', () => {

        const leftWrapper = shallowMount(TimeLineEvent, {
            propsData: {
                name: props.name,
                text: props.text,
                condensed: props.condensed,
                direction: Direction.left,
                date: props.date,
                urls: props.urls,
                images: props.images,
            },
        });

        const rightWrapper = shallowMount(TimeLineEvent, {
            propsData: {
                name: props.name,
                text: props.text,
                condensed: props.condensed,
                direction: Direction.right,
                date: props.date,
                urls: props.urls,
                images: props.images,
            },
        });

        expect(leftWrapper.element.classList).toContain('left');
        expect(rightWrapper.element.classList).toContain('right');
    });

    it('displays the event content', () => {

        const wrapper = shallowMount(TimeLineEvent, {
            propsData: {
                name: 'Geralt',
                text: 'of Rivia',
                condensed: props.condensed,
                direction: props.direction,
                date: new Date('October 9, 2019 00:00:00 EST'),
                urls: props.urls,
                images: props.images,
            },
        });

        expect(wrapper.text()).toContain('Geralt');
        expect(wrapper.text()).toContain('of Rivia');
        expect(wrapper.text()).toContain('October 9, 2019');
    })
});
