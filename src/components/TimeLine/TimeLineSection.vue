<template>
    <section id="timeline">
        <h2>Timeline of Events</h2>
        <div class="row">
            <time-line/>
        </div>
    </section>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import TimeLine from '@/components/TimeLine/TimeLine.vue';
    import { jarallax } from 'jarallax';

    @Component({
        components: { TimeLine },
    })

    export default class TimeLineSection extends Vue {
        private mounted() {
            jarallax(document.querySelector('section#timeline'), {
                speed: 0.6,
            });
        }
    }
</script>

<style lang="scss" scoped>
    @import './../../assets/scss/variables';

    .row {
        margin: 0 auto;
        max-width: $displayWidth;
    }

    h2 {
        padding-left: $sectionPadding;
        padding-right: $sectionPadding;
        margin-bottom: 1rem;
    }

    section {
        position: relative;
        padding-left: 0;
        padding-right: 0;
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
