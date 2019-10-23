<template>
    <div>
        <page-header title="Contact" />
        <contact-section />
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import PageHeader from '@/components/PageHeader.vue';
    import ContactSection from '@/components/Contact/ContactSection.vue';

    @Component({
        components: { PageHeader, ContactSection }
    })
    export default class Home extends Vue {
    }
</script>
