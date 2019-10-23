<template>
    <form method="post" name="submit-new" netlify>
        <div class="input-wrapper">
            <label for="contact-name">Name</label>
            <input type="text" id="contact-name" name="name" />
        </div>

        <div class="input-wrapper">
            <label for="contact-email">Email</label>
            <input type="email" id="contact-email" name="email" />
        </div>

        <label for="contact-message">Message</label>
        <textarea id="contact-message" name="message" rows="6"></textarea>

        <div class="button-wrapper">
            <button type="submit">Send Message</button>
        </div>
    </form>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component({})
    export default class ContactForm extends Vue {

    }
</script>

<style scoped lang="scss">
    @import '../../assets/scss/variables';

    form {
        text-align: left;
        max-width: 80rem;
        margin: 0 auto;
    }

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
    }

    input, textarea {
        width: 100%;
        border: none;
        padding: 0.5rem 0.75rem;
        margin-bottom: 1rem;
    }

    .button-wrapper {
        text-align: right;
    }
</style>
