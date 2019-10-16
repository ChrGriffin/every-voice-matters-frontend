<template>
  <section>
    <time-line/>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TimeLine from '@/components/TimeLine.vue';

@Component({
  components: {
    TimeLine,
  },
})
export default class Home extends Vue {}
</script>
