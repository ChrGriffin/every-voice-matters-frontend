<template>
    <section id="contact">
        <contact-form />
    </section>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import ContactForm from '@/components/Contact/ContactForm.vue';

    @Component({
        components: { ContactForm }
    })

    export default class ContactSection extends Vue {

    }
</script>

<style scoped lang="scss">
    @import '../../assets/scss/variables';

    form {
        text-align: left;
        max-width: 50rem;
        margin: 0 auto;
    }
</style>
