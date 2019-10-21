import { shallowMount } from '@vue/test-utils';
import CommunityArtItem from '@/components/CommunityArt/CommunityArtItem.vue';

const props = {
    image: '/path/to/geralt/of/rivia.jpg',
    label: 'Geralt of Rivia',
    author: {
        name: 'Geralt of Rivia',
        url: 'https://geralt.of/rivia',
    },
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

    it('provides a link to the image', () => {

        const wrapper = shallowMount(CommunityArtItem, {
            propsData: props,
        });

        expect(wrapper.find(`a[href="${props.image}"]`).element).toBeTruthy();
    });

    it('displays the author\'s name and url', () => {

        const wrapper = shallowMount(CommunityArtItem, {
            propsData: props,
        });

        const link = wrapper.find(`.source a[href="${props.author.url}"]`).element;
        expect(link).toBeTruthy();
        expect(link.innerHTML).toBe(props.author.name);
    });

    it('displays the author\'s name without a url if the author has no url', () => {

        const wrapper = shallowMount(CommunityArtItem, {
            propsData: {
                image: props.image,
                label: props.label,
                author: {
                    url: null,
                    name: props.author.name,
                },
            },
        });

        const span = wrapper.find('.source span').element;
        expect(span).toBeTruthy();
        expect(span.innerHTML).toBe(props.author.name);
    });
});
