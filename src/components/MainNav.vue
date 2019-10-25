<template>
    <scrollactive :offset="60">
        <ul>
            <li><a href="#summary" class="scrollactive-item">Summary</a></li>
            <li><a href="#timeline" class="scrollactive-item">Timeline<span> of Events</span></a></li>
            <li><a href="#support" class="scrollactive-item">Support</a></li>
            <li><a href="#community-art" class="scrollactive-item"><span>Community </span>Art</a></li>
        </ul>
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
        background: $black;
        padding: 1rem 0;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 99;

        ul {
            list-style: none;
            text-align: center;
            padding-left: 0;

            li {
                display: inline-block;
                padding-bottom: 0;

                &:first-child a {
                    margin-left: 0;
                }

                &:last-child a {
                    margin-right: 0;
                }

                a {
                    color: $white;
                    font-family: $titleFont;
                    text-decoration: none;
                    margin: 0 2rem;
                    font-size: 1.6rem;

                    &.is-active {
                        color: $red;
                    }

                    &:hover {
                        color: $yellow;
                    }
                }
            }
        }
    }

    @media screen and (max-width: $smallScreen) {

        nav ul li a {
            margin: 0 0.5rem;
            font-size: 1.4rem;

            span {
                display: none;
            }
        }
    }
</style>
