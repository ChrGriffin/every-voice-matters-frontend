import { shallowMount } from '@vue/test-utils';
import TimeLineEvent from '@/components/TimeLineEvent.vue';
import { Direction } from '@/components/types';

const props = {
    name: 'Geralt of Rivia',
    text: '',
    condensed: false,
    direction: Direction.left,
};

describe('TimeLineEvent.vue', () => {

    it('displays as condensed or not', () => {

        const condensedWrapper = shallowMount(TimeLineEvent, {
            propsData: {
                name: props.name,
                text: props.text,
                condensed: true,
                direction: props.direction,
            },
        });

        const nonCondensedWrapper = shallowMount(TimeLineEvent, {
            propsData: {
                name: props.name,
                text: props.text,
                condensed: false,
                direction: props.direction,
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
            },
        });

        const rightWrapper = shallowMount(TimeLineEvent, {
            propsData: {
                name: props.name,
                text: props.text,
                condensed: props.condensed,
                direction: Direction.right,
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
            },
        });

        expect(wrapper.text()).toContain('Geralt');
        expect(wrapper.text()).toContain('of Rivia');
    })
});
