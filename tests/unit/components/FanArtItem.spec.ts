import { shallowMount } from '@vue/test-utils';
import FanArtItem from '@/components/FanArt/FanArtItem.vue';

const props = {
    image: '/path/to/geralt/of/rivia.jpg',
    label: 'Geralt of Rivia',
};

describe('FanArtItem.vue', () => {

    it('displays the image', () => {

        const wrapper = shallowMount(FanArtItem, {
            propsData: props,
        });

        expect(wrapper.find('img').element).toBeTruthy();
        expect(wrapper.find('img').element.getAttribute('src'))
            .toBe(props.image);
    });

    it('applies the image alt tag', () => {

        const wrapper = shallowMount(FanArtItem, {
            propsData: props,
        });

        expect(wrapper.find('img').element).toBeTruthy();
        expect(wrapper.find('img').element.getAttribute('alt'))
            .toBe(props.label);
    });
});
