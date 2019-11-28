import {shallowMount, Wrapper} from '@vue/test-utils';
import ContactForm from '@/components/Contact/ContactForm.vue';
import flushPromises from 'flush-promises';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const axiosMock = new MockAdapter(axios);

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

function enterFormInfo(wrapper: Wrapper<any>, datasets: any[]) {
    const name = datasets.filter((dataset) => dataset.field === 'name')[0].value;
    const email = datasets.filter((dataset) => dataset.field === 'email')[0].value;
    const message = datasets.filter((dataset) => dataset.field === 'message')[0].value;

    wrapper.find('input[name="name"]').setValue(name);
    wrapper.find('input[name="email"]').setValue(email);
    wrapper.find('textarea[name="message"]').setValue(message);

    return {name, email, message};
}

describe('ContactForm.vue', () => {

    beforeEach(() => {
        axiosMock.reset();
    });

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

    it('validates the form when the user clicks submit', () => {

        const wrapper = shallowMount(ContactForm);

        enterFormInfo(wrapper, invalidFields);
        wrapper.find('button').trigger('click');

        expect(wrapper.find('input[name="name"]').classes()).toContain('error');
        expect(wrapper.find('input[name="email"]').classes()).toContain('error');
        expect(wrapper.find('textarea[name="message"]').classes()).toContain('error');
    });

    it('posts to the app root when the user clicks submit with valid data', async () => {

        axiosMock.onPost('/').replyOnce(200);
        const wrapper = shallowMount(ContactForm);

        const { name, email, message } = enterFormInfo(wrapper, validFields);
        wrapper.find('button').trigger('click');
        await flushPromises();

        expect(axiosMock.history.post.length).toBe(1);
        expect(axiosMock.history.post[0].data)
            .toContain(encodeURI(`name=${name}`));
    });

    it('displays a loading indicator instead of the form while the form is submitting', async () => {
        axiosMock.onPost('/').replyOnce(200);
        const wrapper = shallowMount(ContactForm);

        enterFormInfo(wrapper, validFields);
        wrapper.find('button').trigger('click');

        expect(wrapper.find('form').element).toBeFalsy();
        expect(wrapper.find('.loading').element).toBeTruthy();

        await flushPromises();

        expect(wrapper.find('form').element).toBeTruthy();
        expect(wrapper.find('.loading').element).toBeFalsy();
    });

    it('displays a success message if the form successfully submitted', async () => {
        axiosMock.onPost('/').replyOnce(200);
        const wrapper = shallowMount(ContactForm);

        enterFormInfo(wrapper, validFields);
        wrapper.find('button').trigger('click');
        await flushPromises();

        const messageElement = wrapper.find('.message.success');
        expect(messageElement.element).toBeTruthy();
        expect(messageElement.html()).toContain('Your message has been successfully submitted.');
    });

    it('displays an error message if the form cannot submit', async () => {
        axiosMock.onPost('/').replyOnce(500);
        const wrapper = shallowMount(ContactForm);

        enterFormInfo(wrapper, validFields);
        wrapper.find('button').trigger('click');
        await flushPromises();

        const messageElement = wrapper.find('.message.error');
        expect(messageElement.element).toBeTruthy();
        expect(messageElement.html()).toContain('There was a problem submitting your message. Please try again.');
    });

    it('clears the form fields after a successful submission', async () => {
        axiosMock.onPost('/').replyOnce(200);
        const wrapper = shallowMount(ContactForm);

        enterFormInfo(wrapper, validFields);
        wrapper.find('button').trigger('click');
        await flushPromises();

        expect(wrapper.vm.$data.name).toEqual('');
        expect(wrapper.vm.$data.email).toEqual('');
        expect(wrapper.vm.$data.message).toEqual('');
    });

    it('does not clear the form fields after a failed submission', async () => {
        axiosMock.onPost('/').replyOnce(500);
        const wrapper = shallowMount(ContactForm);

        const { name, email, message } = enterFormInfo(wrapper, validFields);
        wrapper.find('button').trigger('click');
        await flushPromises();

        expect(wrapper.vm.$data.name).toEqual(name);
        expect(wrapper.vm.$data.email).toEqual(email);
        expect(wrapper.vm.$data.message).toEqual(message);
    });
});
