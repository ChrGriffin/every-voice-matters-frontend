<template>
    <section>
        <h2>Timeline of Events</h2>
        <time-line/>
    </section>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import TimeLine from '@/components/TimeLine/TimeLine.vue';

    @Component({
        components: { TimeLine, },
    })

    export default class TimeLineSection extends Vue {

    }
</script>
