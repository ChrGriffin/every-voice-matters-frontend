<template>
    <scrollactive class="my-nav">
        <a href="#about" class="scrollactive-item">About</a>
        <a href="#timeline" class="scrollactive-item">Timeline of Events</a>
        <a href="#community-art" class="scrollactive-item">Community Art</a>
        <a href="#support" class="scrollactive-item">Support</a>
    </scrollactive>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component({})
    export default class MainNav extends Vue {

    }
</script>

<style scoped lang="scss">

</style>
