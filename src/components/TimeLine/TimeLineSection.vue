<template>
    <section>
        <div class="top-fade"></div>
        <vue-custom-scrollbar class="timeline-wrapper" tagname="div" :suppress-scroll-x="true">
            <time-line/>
        </vue-custom-scrollbar>
        <div class="bottom-fade"></div>
    </section>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import TimeLine from '@/components/TimeLine/TimeLine.vue';
    import VueCustomScrollbar from 'vue-custom-scrollbar';

    @Component({
        components: { TimeLine, VueCustomScrollbar },
    })

    export default class TimeLineSection extends Vue {

    }
</script>

<style lang="scss" scoped>
    @import '../../assets/scss/variables';

    .timeline-wrapper {
        z-index: 4;
        position: relative;
        height: 90vh;
    }

    .top-fade {
        position: relative;
        z-index: 5;
        height: $timelineFadeHeight;
        margin-bottom: -$timelineFadeHeight;
        background: -webkit-linear-gradient(top, rgba($backgroundColor, 1) #{99.5% - $timelineGradientHeight}, rgba($backgroundColor, 0) 99.5%);
    }

    .bottom-fade {
        position: relative;
        z-index: 5;
        height: $timelineFadeHeight;
        margin-top: -$timelineFadeHeight;
        background: -webkit-linear-gradient(top, rgba($backgroundColor, 0) 0.5%, rgba($backgroundColor, 1) #{0.5% + $timelineGradientHeight});
    }
</style>
