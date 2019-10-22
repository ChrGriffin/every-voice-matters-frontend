<template>
    <section id="community-art">
        <h2>Community Art</h2>
        <community-art-grid />
    </section>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import CommunityArtGrid from '@/components/CommunityArt/CommunityArtGrid.vue';

    @Component({
        components: { CommunityArtGrid },
    })
    export default class CommunityArtSection extends Vue {

    }
</script>

<style lang="scss" scoped>

</style>
