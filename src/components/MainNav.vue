<template>
    <scrollactive :offset="60">
        <a href="#summary" class="scrollactive-item">Summary</a>
        <a href="#timeline" class="scrollactive-item">Timeline of Events</a>
        <a href="#support" class="scrollactive-item">Support</a>
        <a href="#community-art" class="scrollactive-item">Community Art</a>
    </scrollactive>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component({})
    export default class MainNav extends Vue {

    }
</script>

<style scoped lang="scss">
    @import './../assets/scss/variables';

    nav {
        background: black;
        padding: 1rem 0;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 99;

        a {
            color: $white;
            font-family: 'big-noodle-titling-oblique', sans-serif;
            text-decoration: none;
            margin: 0 2rem;
            font-size: 1.6rem;

            &:first-child {
                padding-left: 0;
            }

            &:last-child {
                padding-right: 0;
            }

            &.is-active {
                color: $red;
            }

            &:hover {
                color: $yellow;
            }
        }
    }
</style>
