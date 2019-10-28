import { shallowMount } from '@vue/test-utils';
import AnnouncementSection from "@/components/AnnouncementSection.vue";

describe('AnnouncementSection.vue', () => {

    it('displays the passed announcement text and url', () => {

        const wrapper = shallowMount(AnnouncementSection, {
            propsData: {
                text: 'Geralt of Rivia',
                url: 'https://geralt.of/rivia'
            },
        });

        expect(wrapper.text()).toContain('Geralt of Rivia');
        expect(wrapper.find('a[href="https://geralt.of/rivia"]').exists()).toBe(true);
    });
});
