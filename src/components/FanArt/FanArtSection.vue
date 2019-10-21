<template>
    <section class="fan-art">
        <h2>Fan Art</h2>
        <fan-art-grid />
    </section>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import FanArtGrid from '@/components/FanArt/FanArtGrid.vue';

    @Component({
        components: {FanArtGrid}
    })
    export default class FanArtSection extends Vue {

    }
</script>

<style lang="scss" scoped>

</style>
