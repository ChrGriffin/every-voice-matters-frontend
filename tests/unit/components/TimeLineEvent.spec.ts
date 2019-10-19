import { shallowMount } from '@vue/test-utils';
import TimeLineEvent from '@/components/TimeLineEvent.vue';
import { Direction } from '@/components/types';
import { EventAttachmentType } from '@/services/api/types';

const props = {
    name: 'Geralt of Rivia',
    text: '',
    condensed: false,
    direction: Direction.left,
    date: new Date('October 8, 2019 00:00:00 EST'),
    icon: '',
    urls: [],
    images: [],
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
                icon: props.icon,
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
                icon: props.icon,
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
                icon: props.icon,
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
                icon: props.icon,
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
                icon: props.icon,
                urls: props.urls,
                images: props.images,
            },
        });

        expect(wrapper.text()).toContain('Geralt');
        expect(wrapper.text()).toContain('of Rivia');
        expect(wrapper.text()).toContain('October 9, 2019');
    });

    it('displays the event attachments', () => {

        const wrapper = shallowMount(TimeLineEvent, {
            propsData: {
                name: props.name,
                text: props.text,
                condensed: props.condensed,
                direction: props.direction,
                date: props.date,
                icon: props.icon,
                urls: [
                    {
                        type: EventAttachmentType.url,
                        value: 'https://www.geralt-rivia.of',
                        label: 'Original Link',
                    },
                ],
                images: [
                    {
                        type: EventAttachmentType.image,
                        value: 'https://www.geralt-rivia.of/yennefer.jpg',
                        label: 'A descriptive alt tag.',
                    },
                ],
            },
        });

        const url = wrapper.find('a').element;
        const image = wrapper.find('img').element;

        expect(url).toBeTruthy();
        expect(url.getAttribute('href')).toBe('https://www.geralt-rivia.of');
        expect(url.innerHTML).toBe('Original Link');

        expect(image).toBeTruthy();
        expect(image.getAttribute('src')).toBe('https://www.geralt-rivia.of/yennefer.jpg');
        expect(image.getAttribute('alt')).toBe('A descriptive alt tag.');
    });

    it('displays the event icon if the event is uncondensed', () => {

        const uncondensedWrapper = shallowMount(TimeLineEvent, {
            propsData: {
                name: props.name,
                text: props.text,
                condensed: false,
                direction: props.direction,
                date: props.date,
                icon: '/images/icon.svg',
                urls: props.urls,
                images: props.images,
            },
        });

        const condensedWrapper = shallowMount(TimeLineEvent, {
            propsData: {
                name: props.name,
                text: props.text,
                condensed: true,
                direction: props.direction,
                date: props.date,
                icon: '/images/icon.svg',
                urls: props.urls,
                images: props.images,
            },
        });

        expect(condensedWrapper.find('.icon').element).toBeUndefined();
        expect(uncondensedWrapper.find('.icon').element).toBeTruthy();
        expect(uncondensedWrapper.find('.icon').element.getAttribute('src'))
            .toBe('/images/icon.svg');
    });
});
