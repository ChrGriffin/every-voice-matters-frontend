<template>
    <div v-masonry
         transition-duration="0s"
         item-selector="section#community-art .item"
         column-width="section#community-art .item"
         :gutter="20">

        <community-art-item v-for="art in communityArt"
                            v-masonry-tile
                            :key="art.image"
                            :image="art.image"
                            :label="art.description"
                            :author="art.author" />
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import CommunityArtRepository from '@/repositories/CommunityArtRepository';
    import { CommunityArt } from '@/repositories/types';
    import CommunityArtItem from '@/components/CommunityArt/CommunityArtItem.vue';

    @Component({
        components: { CommunityArtItem },
    })
    export default class CommunityArtGrid extends Vue {
        @Prop({
            default: () => {
                return new CommunityArtRepository();
            },
        }) public communityArtRepository!: CommunityArtRepository;

        public communityArt: CommunityArt[] = [];

        public getFanArt(): void {
            this.communityArt = this.communityArtRepository.getArt();
        }

        private mounted() {
            this.getFanArt();
        }
    }
</script>

<style lang="scss" scoped>

</style>
