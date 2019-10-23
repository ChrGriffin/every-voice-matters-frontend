import { shallowMount } from '@vue/test-utils';
import ContactForm from '@/components/Contact/ContactForm.vue';

describe('ContactForm.vue', () => {

    it('displays a contact form', () => {

        const wrapper = shallowMount(ContactForm);

        expect(wrapper.find('input[name="name"]').element).toBeTruthy();
        expect(wrapper.find('input[name="email"]').element).toBeTruthy();
        expect(wrapper.find('textarea[name="message"]').element).toBeTruthy();
        expect(wrapper.find('button[type="submit"]').element).toBeTruthy();
    });
});
