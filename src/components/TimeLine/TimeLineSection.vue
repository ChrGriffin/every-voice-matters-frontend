<template>
    <section class="timeline">
        <h2>Timeline of Events</h2>
        <time-line/>
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
            jarallax(document.querySelector('section.timeline'), {
                speed: 0.6
            });
        }
    }
</script>

<style lang="scss" scoped>
    @import './../../assets/scss/variables';

    h2 {
        padding-left: $sectionPadding;
        padding-right: $sectionPadding;
    }

    section {
        padding-left: 0;
        padding-right: 0;
        background-image: url('./../../assets/images/triangles.jpg');
        background-repeat: repeat;
        background-size: 60%;
    }
</style>
