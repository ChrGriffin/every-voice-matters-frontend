<template>
  <div>
    <time-line-section />
    <fan-art-section />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TimeLineSection from '@/components/TimeLine/TimeLineSection.vue';
import FanArtSection from '@/components/FanArt/FanArtSection.vue';

@Component({
  components: {
    FanArtSection,
    TimeLineSection,
  },
})
export default class Home extends Vue {}
</script>
