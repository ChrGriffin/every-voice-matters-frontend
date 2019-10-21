<template>
    <section>
        <div class="top-fade"></div>
        <vue-custom-scrollbar class="timeline-wrapper" :settings="{tagname: 'div'}">
            <time-line/>
        </vue-custom-scrollbar>
        <div class="bottom-fade"></div>
    </section>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import TimeLine from '@/components/TimeLine.vue';
    import VueCustomScrollbar from 'vue-custom-scrollbar';

    @Component({
        components: { TimeLine, VueCustomScrollbar },
    })

    export default class TimeLineSection extends Vue {

    }
</script>

<style scoped lang="scss">
    @import './../assets/scss/variables';

    $fadeHeight: 10px;
    $gradientHeight: 80%;

    .timeline-wrapper {
        z-index: 4;
        position: relative;
        height: 90vh;
    }

    .top-fade {
        position: relative;
        z-index: 5;
        height: $fadeHeight;
        margin-bottom: -$fadeHeight;
        background: -webkit-linear-gradient(top, rgba($backgroundColor, 1) #{99.5% - $gradientHeight}, rgba($backgroundColor, 0) 99.5%);
    }

    .bottom-fade {
        position: relative;
        z-index: 5;
        height: $fadeHeight;
        margin-top: -$fadeHeight;
        background: -webkit-linear-gradient(top, rgba($backgroundColor, 0) 0.5%, rgba($backgroundColor, 1) #{0.5% + $gradientHeight});
    }
</style>
