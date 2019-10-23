import { shallowMount } from '@vue/test-utils';
import ContactForm from '@/components/Contact/ContactForm.vue';

const invalidFields = [
    {description: 'empty name', field: 'name', value: '', error: 'Name is required.'},
    {description: 'empty email', field: 'email', value: '', error: 'Email is required.'},
    {description: 'invalid email without @', field: 'email', value: 'notAnEmail', error: 'Email is invalid.'},
    {description: 'invalid email with @', field: 'email', value: 'alsonot@nemail', error: 'Email is invalid.'},
    {description: 'empty message', field: 'message', value: '', error: 'Message is required.'},
];

const validFields = [
    {description: 'valid name', field: 'name', value: 'Geralt of Rivia'},
    {description: 'valid email', field: 'email', value: 'geralt@rivia.of'},
    {description: 'valid message', field: 'message', value: 'Wind\'s howling...'},
];

describe('ContactForm.vue', () => {

    it('displays a contact form', () => {

        const wrapper = shallowMount(ContactForm);

        expect(wrapper.find('input[name="name"]').element).toBeTruthy();
        expect(wrapper.find('input[name="email"]').element).toBeTruthy();
        expect(wrapper.find('textarea[name="message"]').element).toBeTruthy();
        expect(wrapper.find('button[type="button"]').element).toBeTruthy();
    });

    validFields.forEach((dataset) => {

        it(`does not add error class to valid field on blur with dataset: ${dataset.description}`, () => {

            const wrapper = shallowMount(ContactForm);
            const formInput = wrapper.find(`[name="${dataset.field}"]`);
            expect(formInput.element.classList.contains('error')).toBe(false);

            formInput.setValue(dataset.value);
            formInput.trigger('blur');
            expect(formInput.element.classList.contains('error')).toBe(false);
        });
    });

    invalidFields.forEach((dataset) => {

        it(`adds error class to invalid field on blur with dataset: ${dataset.description}`, () => {

            const wrapper = shallowMount(ContactForm);
            const formInput = wrapper.find(`[name="${dataset.field}"]`);
            expect(formInput.element.classList.contains('error')).toBe(false);

            formInput.setValue(dataset.value);
            formInput.trigger('blur');
            expect(formInput.element.classList.contains('error')).toBe(true);
        });
    });

});
