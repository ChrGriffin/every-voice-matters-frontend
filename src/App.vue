<template>
    <div id="app">
        <transition name="fade"
                    mode="out-in"
                    @beforeLeave="beforeLeave"
                    @enter="enter"
                    @afterEnter="afterEnter">
            <router-view />
        </transition>
        <site-footer />
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import Component from 'vue-class-component';
    import SiteFooter from '@/components/SiteFooter.vue';

    @Component({
        components: { SiteFooter },
    })

    export default class App extends Vue {
        private prevHeight: null|string = '0';

        public beforeLeave(element: HTMLElement): void {
            this.prevHeight = getComputedStyle(element).height;
        }

        public enter(element: HTMLElement): void {
            const { height } = getComputedStyle(element);

            element.style.height = this.prevHeight;

            setTimeout(() => {
                element.style.height = height;
            });
        }

        public afterEnter(element: HTMLElement): void {
            element.style.height = 'auto';
        }
    }
</script>

<style lang="scss">
    @import './../node_modules/css-reset-and-normalize/scss/reset-and-normalize';
    @import './../node_modules/blear.scss.clearfix/src/index';
    @import './assets/scss/variables.scss';
    @import url('https://fonts.googleapis.com/css?family=Roboto:400,400i&display=swap');

    @font-face {
        font-family: 'big-noodle-titling-oblique';
        src: url('./assets/fonts/big_noodle_titling_oblique.woff2') format('woff2'),
             url('./assets/fonts/big_noodle_titling_oblique.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }

    body {
        position: relative;
        background-color: $offWhite;
        min-height: 100vh;
        padding-bottom: 3rem;
    }

    #app {
        font-family: 'Roboto', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
    }

    section {
        padding: $sectionPadding;
    }

    .row {
        @include clearfix();
    }

    h1, h2 {
        font-family: $titleFont;
    }

    h2 {
        font-size: 4rem;
        line-height: 0.8;
        margin: 1rem 0 3rem;
    }

    .italic {
        font-style: italic;
        margin-bottom: 2rem;
    }

    p {
        line-height: 1.2;
        text-align: left;
        padding-bottom: 1rem;
    }

    ul {
        line-height: 1.2;
        text-align: left;
        list-style: disc;
        padding-left: 2rem;

        li {
            padding-bottom: 1rem;
        }
    }

    button {
        font-family: $titleFont;
        background-color: $black;
        color: $white;
        border: none;
        padding: 0.75rem 1rem;
        font-size: 1.4rem;

        &:hover {
            cursor: pointer;
            color: $yellow;
        }

        &:active {
            color: $red;
        }
    }

    section .timeline {
        padding-left: $sectionPadding;
        padding-right: $sectionPadding;
    }

    .fade-enter-active,
    .fade-leave-active {
        transition-duration: 0.3s;
        transition-property: height, opacity;
        transition-timing-function: ease;
        overflow: hidden;
    }

    .fade-enter,
    .fade-leave-active {
        opacity: 0
    }
</style>
