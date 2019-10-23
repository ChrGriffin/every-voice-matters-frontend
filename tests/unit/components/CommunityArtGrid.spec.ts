import { createLocalVue, mount } from '@vue/test-utils';
import CommunityArtGrid from '@/components/CommunityArt/CommunityArtGrid.vue';
import CommunityArtItem from '@/components/CommunityArt/CommunityArtItem.vue';
import * as CommunityArtRepository from '@/repositories/CommunityArtRepository';
import { ImportMock } from 'ts-mock-imports';
import { CommunityArt } from '@/repositories/types';

const MockedCommunityArtRepository = ImportMock.mockClass(CommunityArtRepository);

// fake the masonry directives to suppress test warnings
const localVue = createLocalVue();
localVue.directive('masonry', () => { /**/ });
localVue.directive('masonry-tile', () => { /**/ });

const communityArt: CommunityArt[] = [
    {
        image: 'http://somesite.com/animage.jpg',
        description: 'Image description',
        author: {
            name: 'Geralt of Rivia',
            url: 'https://geralt.of/rivia',
        },
    },
    {
        image: 'http://somesite.com/animage.jpeg',
        description: 'Image description',
        author: {
            name: 'Yennefer of Vengerberg',
            url: 'https://yennefer.of/vengerberg',
        },
    },
    {
        image: 'http://somesite.com/animage.png',
        description: 'Image description',
        author: {
            name: 'Triss Merigold',
            url: 'https://triss.merigold',
        },
    },
];

describe('CommunityArtGrid.vue', () => {

    beforeEach(() => {
        MockedCommunityArtRepository.restore();
        MockedCommunityArtRepository.mock('getArt', communityArt);
    });

    it('renders a grid of community art', (done) => {

        const wrapper = mount(CommunityArtGrid, {
            localVue,
            propsData: {
                communityArtRepository: MockedCommunityArtRepository.getMockInstance(),
            },
        });

        wrapper.vm.$nextTick(() => {

            const pageCommunityArt = wrapper.findAll(CommunityArtItem);
            expect(pageCommunityArt).toHaveLength(3);
            communityArt.forEach((art) => {
                const image = wrapper.find(`img[src="${art.image}"]`).element;
                expect(image).toBeTruthy();
            });

            done();
        });
    });
});
