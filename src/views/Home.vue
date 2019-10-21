<template>
  <time-line-section />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TimeLineSection from '@/components/TimeLine/TimeLineSection.vue';

@Component({
  components: {
    TimeLineSection,
  },
})
export default class Home extends Vue {}
</script>