<template>
  <div>
    <div class="top-fade"></div>
    <vue-custom-scrollbar class="timeline-wrapper">
      <time-line/>
    </vue-custom-scrollbar>
    <div class="bottom-fade"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TimeLine from '@/components/TimeLine.vue';
import VueCustomScrollbar from 'vue-custom-scrollbar';

@Component({
  components: {
    TimeLine, VueCustomScrollbar
  },
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
  @import './../assets/scss/variables';

  $fadeHeight: 20px;
  $gradientHeight: 50%;

  .timeline-wrapper {
    z-index: 4;
    position: relative;
    height: 80vh;
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