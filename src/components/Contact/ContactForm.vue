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
        <textarea id="contact-message" name="message"></textarea>

        <button type="submit">Send Message</button>
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
</style>
