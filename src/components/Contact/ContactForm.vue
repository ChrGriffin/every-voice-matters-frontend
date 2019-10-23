<template>
    <form method="post" name="submit-new" netlify>
        <div class="input-wrapper">
            <label for="contact-name" class="required">Name</label>
            <input type="text"
                   id="contact-name"
                   name="name"
                   v-on:blur="validateName"
                   :class="(!nameIsValid ? '' : 'error')"
                   v-model="name"
                   required />
        </div>

        <div class="input-wrapper">
            <label for="contact-email" class="required">Email</label>
            <input type="email"
                   id="contact-email"
                   name="email"
                   v-on:blur="validateEmail"
                   :class="(!emailIsValid ? '' : 'error')"
                   v-model="email"
                   required />
        </div>

        <label for="contact-message" class="required">Message</label>
        <textarea id="contact-message"
                  name="message"
                  rows="6"
                  v-on:blur="validateMessage"
                  :class="(!messageIsValid ? '' : 'error')"
                  v-model="message"
                  required></textarea>

        <div class="button-wrapper">
            <button type="button" v-on:click="postMessage">Send Message</button>
        </div>
    </form>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component({})
    export default class ContactForm extends Vue {

        public name: string = '';
        public email: string = '';
        public message: string = '';
        public invalidFields: string[] = [];

        get nameIsValid(): boolean {
            return this.invalidFields.includes('name');
        }

        get emailIsValid(): boolean {
            return this.invalidFields.includes('email');
        }

        get messageIsValid(): boolean {
            return this.invalidFields.includes('message');
        }

        public validateName(): boolean {
            if(this.name.length <= 0) {
                this.pushInvalidField('name');
                return false;
            }

            this.removeInvalidField('name');
            return true;
        }

        public validateEmail(): boolean {
            if(! /\S+@\S+\.\S+/.test(this.email)) {
                this.pushInvalidField('email');
                return false;
            }

            this.removeInvalidField('email');
            return true;
        }

        public validateMessage(): boolean {

            if(this.message.length <= 0) {
                this.pushInvalidField('message');
                return false;
            }

            this.removeInvalidField('message');
            return true;
        }

        public postMessage(): void {

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

    .input-wrapper {
        float: left;
        width: 50%;

        &:first-child {
            padding-left: 0;
            padding-right: $sectionPadding / 2;
        }

        &:nth-child(2) {
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
</style>
