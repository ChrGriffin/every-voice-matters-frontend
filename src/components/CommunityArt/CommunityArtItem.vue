<template>
    <div class="item">
        <a class="image" :href="image" target="_blank">
            <img :src="image" :alt="label" />
        </a>

        <div class="source">
            Source:
            <a v-if="author.url" :href="author.url" target="_blank">{{ author.name }}</a>
            <span v-else>{{ author.name }}</span>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import { CommunityArtAuthor } from '@/repositories/types';

    @Component({})
    export default class CommunityArtItem extends Vue {
        @Prop() public image!: string;
        @Prop() public label!: string;
        @Prop() public author!: CommunityArtAuthor;
    }
</script>

<style lang="scss" scoped>
    @import './../../assets/scss/variables';

    .item {
        margin-bottom: 20px;
        width: calc(20% - 16px);
        background-color: $white;
        box-shadow: 0 6px 6px -6px rgba(0, 0, 0, 0.5);

        a.image {
            display: block;
            width: 100%;
            overflow: hidden;

            img {
                width: 100%;
                transform: scale(1, 1);
                transition: transform 0.25s ease;
            }

            &:hover img {
                transform: scale(1.1, 1.1);
                transition: transform 0.25s ease;
            }
        }

        .source {
            font-style: italic;
            font-size: 0.8rem;
            padding: 0.5rem;
            text-align: left;
        }
    };

    @media screen and (max-width: $mediumScreen) {

        .item {
            width: calc(33% - 11px);
        }
    }

    @media screen and (max-width: $smallScreen) {

        .item {
            width: calc(50% - 10px);
        }
    }
</style>
