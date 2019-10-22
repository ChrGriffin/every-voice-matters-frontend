<template>
    <section id="community-art">
        <h2>Community Art</h2>
        <community-art-grid />
    </section>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import CommunityArtGrid from '@/components/CommunityArt/CommunityArtGrid.vue';
    import { jarallax } from 'jarallax';

    @Component({
        components: { CommunityArtGrid },
    })
    export default class CommunityArtSection extends Vue {
        private mounted() {
            jarallax(document.querySelector('section#community-art'), {
                speed: 0.6,
            });
        }
    }
</script>

<style lang="scss" scoped>
    section {
        position: relative;
        background-image: url('./../../assets/images/triangles.jpg');
        background-repeat: repeat;
        background-size: 60%;
        overflow: hidden;

        &:before {
            display: block;
            content: '';
            position: absolute;
            top: -25px;
            left: 0;
            width: 100%;
            height: 20px;
            box-shadow: 0 10px 10px -8px rgba(0, 0, 0, 0.5);
        }

        &:after {
            display: block;
            content: '';
            position: absolute;
            bottom: -25px;
            left: 0;
            width: 100%;
            height: 20px;
            box-shadow: 0 -10px 10px -8px rgba(0, 0, 0, 0.5);
        }
    }
</style>
