import { shallowMount } from '@vue/test-utils';
import CommunityArtItem from '@/components/CommunityArt/CommunityArtItem.vue';

const props = {
    image: '/path/to/geralt/of/rivia.jpg',
    label: 'Geralt of Rivia',
};

describe('CommunityArtItem.vue', () => {

    it('displays the image', () => {

        const wrapper = shallowMount(CommunityArtItem, {
            propsData: props,
        });

        expect(wrapper.find('img').element).toBeTruthy();
        expect(wrapper.find('img').element.getAttribute('src'))
            .toBe(props.image);
    });

    it('applies the image alt tag', () => {

        const wrapper = shallowMount(CommunityArtItem, {
            propsData: props,
        });

        expect(wrapper.find('img').element).toBeTruthy();
        expect(wrapper.find('img').element.getAttribute('alt'))
            .toBe(props.label);
    });
});
