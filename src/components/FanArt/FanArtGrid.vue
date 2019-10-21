<template>
    <div v-masonry transition-duration="0s" item-selector="section.fan-art .item" column-width="section.fan-art .item" :gutter="20">
        <fan-art-item v-for="art in fanArt" v-masonry-tile :image="art.image" :label="art.description" />
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import FanArtApi from '@/services/api/FanArtApi';
    import {FanArt} from "@/services/api/types";
    import FanArtItem from '@/components/FanArt/FanArtItem.vue';

    @Component({
        components: {FanArtItem}
    })
    export default class FanArtGrid extends Vue {
        @Prop({
            default: () => {
                return new FanArtApi();
            },
        }) public fanArtApi!: FanArtApi;

        public fanArt: FanArt[] = [];

        public getFanArt(): void {
            this.fanArt = this.fanArtApi.getFanArt();
        }

        private mounted() {
            this.getFanArt();
        }
    }
</script>

<style lang="scss" scoped>

</style>
