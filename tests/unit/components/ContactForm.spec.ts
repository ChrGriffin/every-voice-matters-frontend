import { shallowMount } from '@vue/test-utils';
import ContactForm from '@/components/Contact/ContactForm.vue';

const invalidFields = [
    {description: 'empty name', field: 'name', value: '', error: 'Name is required.'},
    {description: 'empty email', field: 'email', value: '', error: 'Email is required.'},
    {description: 'invalid email', field: 'email', value: 'not@nemail', error: 'Email is invalid.'},
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

    validFields.forEach((dataset) => {

        it(`removes error class from a formerly invalid field on blur with dataset: ${dataset.description}`, () => {

            const wrapper = shallowMount(ContactForm);
            const formInput = wrapper.find(`[name="${dataset.field}"]`);
            expect(formInput.element.classList.contains('error')).toBe(false);

            const invalidFieldDataset = invalidFields
                .filter((validFieldDataset) => validFieldDataset.field === dataset.field)[0];

            formInput.setValue(invalidFieldDataset.value);
            formInput.trigger('blur');
            expect(formInput.element.classList.contains('error')).toBe(true);

            formInput.setValue(dataset.value);
            formInput.trigger('blur');
            expect(formInput.element.classList.contains('error')).toBe(false);
        });
    });

    invalidFields.forEach((dataset) => {

        it(`displays a relevant error for a field on blur with dataset: ${dataset.description}`, () => {

            const wrapper = shallowMount(ContactForm);
            const formInput = wrapper.find(`[name="${dataset.field}"]`);
            expect(wrapper.find('.error-message').element).toBeFalsy();

            formInput.setValue(dataset.value);
            formInput.trigger('blur');
            expect(wrapper.find('.error-message').element).toBeTruthy();
            expect(wrapper.find('.error-message').html()).toContain(dataset.error);
        });
    });

    it('it validates the form when the user clicks submit', () => {

        const wrapper = shallowMount(ContactForm);

        const invalidName = invalidFields.filter((validFieldDataset) => validFieldDataset.field === 'name')[0];
        const invalidEmail = invalidFields.filter((validFieldDataset) => validFieldDataset.field === 'email')[0];
        const invalidMessage = invalidFields.filter((validFieldDataset) => validFieldDataset.field === 'message')[0];

        wrapper.find('input[name="name"]').setValue(invalidName.value);
        wrapper.find('input[name="email"]').setValue(invalidEmail.value);
        wrapper.find('textarea[name="message"]').setValue(invalidMessage.value);

        wrapper.find('button').trigger('click');

        expect(wrapper.find('input[name="name"]').classes()).toContain('error');
        expect(wrapper.find('input[name="email"]').classes()).toContain('error');
        expect(wrapper.find('textarea[name="message"]').classes()).toContain('error');
    });

});
