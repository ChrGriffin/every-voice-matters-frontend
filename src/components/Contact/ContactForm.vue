<template>
    <div v-if="loading" class="loading">
        <div class="sk-three-bounce">
            <div class="sk-child sk-bounce1"></div>
            <div class="sk-child sk-bounce2"></div>
            <div class="sk-child sk-bounce3"></div>
        </div>
    </div>

    <form v-else method="post" name="submit-new" netlify>
        <div v-if="shouldDisplaySubmitMessage" :class="submitMessageClass">{{ submitMessage }}</div>
        <div>
            <div class="input-wrapper">
                <label for="contact-name" class="required">Name</label>
                <input type="text"
                       id="contact-name"
                       name="name"
                       v-on:blur="validateName"
                       :class="(nameIsValid ? '' : 'error')"
                       v-model="name"
                       required />
                <div class="error-message" v-if="!nameIsValid">{{ errorMessages.name }}</div>
            </div>

            <div class="input-wrapper">
                <label for="contact-email" class="required">Email</label>
                <input type="email"
                       id="contact-email"
                       name="email"
                       v-on:blur="validateEmail"
                       :class="(emailIsValid ? '' : 'error')"
                       v-model="email"
                       required />
                <div class="error-message" v-if="!emailIsValid">{{ errorMessages.email }}</div>
            </div>
        </div>

        <label for="contact-message" class="required">Message</label>
        <textarea id="contact-message"
                  name="message"
                  rows="6"
                  v-on:blur="validateMessage"
                  :class="(messageIsValid ? '' : 'error')"
                  v-model="message"
                  required>
        </textarea>
        <div class="error-message" v-if="!messageIsValid">{{ errorMessages.message }}</div>

        <div class="button-wrapper">
            <button type="button" v-on:click="postMessage">Send Message</button>
        </div>
    </form>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import axios from 'axios';

    interface errorMessages {
        name: null|string;
        email: null|string;
        message: null|string;
    }

    @Component({})
    export default class ContactForm extends Vue {

        public name: string = '';
        public email: string = '';
        public message: string = '';
        public invalidFields: string[] = [];
        public errorMessages: errorMessages = {
            name: null,
            email: null,
            message: null
        };
        public loading: boolean = false;
        public successful: null|boolean = null;
        public submitMessage: string = '';

        get nameIsValid(): boolean {
            return !this.invalidFields.includes('name');
        }

        get emailIsValid(): boolean {
            return !this.invalidFields.includes('email');
        }

        get messageIsValid(): boolean {
            return !this.invalidFields.includes('message');
        }

        get submitMessageClass(): string {
            return 'message' + (this.successful === true ? ' success' : ' error');
        }

        get shouldDisplaySubmitMessage(): boolean {
            return this.successful !== null;
        }

        public validateName(): boolean {
            if(this.name.length <= 0) {
                this.pushInvalidField('name');
                this.errorMessages.name = 'Name is required.';
                return false;
            }

            this.removeInvalidField('name');
            this.errorMessages.name = null;
            return true;
        }

        public validateEmail(): boolean {
            if(this.email.length <= 0) {
                this.pushInvalidField('email');
                this.errorMessages.email = 'Email is required.';
                return false;
            }

            if(! /\S+@\S+\.\S+/.test(this.email)) {
                this.pushInvalidField('email');
                this.errorMessages.email = 'Email is invalid.';
                return false;
            }

            this.removeInvalidField('email');
            this.errorMessages.email = null;
            return true;
        }

        public validateMessage(): boolean {

            if(this.message.length <= 0) {
                this.pushInvalidField('message');
                this.errorMessages.message = 'Message is required.';
                return false;
            }

            this.removeInvalidField('message');
            this.errorMessages.message = null;
            return true;
        }

        public postMessage(): void {
            const nameValid = this.validateName();
            const emailValid = this.validateEmail();
            const messageValid = this.validateMessage();

            if(!nameValid || !emailValid || !messageValid) {
                return;
            }

            this.loading = true;
            axios.post('/', {name: this.name, email: this.email, message: this.message})
                .then(() => {
                    this.name = '';
                    this.email = '';
                    this.message = '';
                    this.successful = true;
                    this.submitMessage = 'Your message has been successfully submitted.';
                    this.loading = false;
                })
                .catch(() => {
                    this.successful = false;
                    this.submitMessage = 'There was a problem submitting your message. Please try again.';
                    this.loading = false;
                });
        }

        private pushInvalidField(field: string): void {
            if(!this.invalidFields.includes(field)) {
                this.invalidFields.push(field);
            }
        }

        private removeInvalidField(field: string): void {
            const index = this.invalidFields.indexOf(field);
            if(index > -1) {
                this.invalidFields.splice(index, 1);
            }
        }
    }
</script>

<style scoped lang="scss">
    @import '../../assets/scss/variables';
    @import './../../../node_modules/spinkit/scss/spinners/7-three-bounce';

    $spinkit-size: 60px;
    $spinkit-spinner-color: black;

    .loading {
        padding: 4rem 0;
    }

    .message {
        color: $white;
        text-align: left;
        padding: 1rem;
        margin-bottom: 1rem;

        &.error {
            background: $red;
        }

        &.success {
            background: $green;
        }
    }

    .input-wrapper {
        float: left;
        width: 50%;

        &:first-child {
            padding-left: 0;
            padding-right: $sectionPadding / 2;
        }

        &:last-child {
            padding-left: $sectionPadding / 2;
            padding-right: 0;
        }
    }

    label {
        display: block;
        clear: both;
        margin-bottom: 0.25rem;
        font-style: italic;

        &.required:after {
            display: inline;
            content: '*';
            color: $red;
            padding-left: 0.25rem;
        }
    }

    input, textarea {
        background-color: $white;
        width: 100%;
        padding: 0.5rem 0.75rem;
        margin-bottom: 1rem;
        border: 2px solid $white;

        &.error {
            border: 2px solid red;
        }
    }

    .button-wrapper {
        text-align: right;
    }

    .error-message {
        background-color: $red;
        color: $white;
        padding: 0.5rem;
        margin-bottom: 0.5rem;
        margin-top: -1rem;
    }

    textarea + .error-message {
        margin-top: calc(-1rem - 3px);
    }
</style>
