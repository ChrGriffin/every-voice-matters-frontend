<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <time-line msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TimeLine from '@/components/TimeLine.vue'; // @ is an alias to /src

@Component({
  components: {
    TimeLine,
  },
})
export default class Home extends Vue {}
</script>
