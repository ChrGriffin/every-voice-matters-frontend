<template>
    <div id="app">
        <router-view/>
    </div>
</template>

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
        background-color: $offWhite;
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
        font-family: 'big-noodle-titling-oblique', sans-serif;
    }

    h2 {
        font-size: 4rem;
        line-height: 0.8;
        margin: 1rem 0 3rem;
    }

    h3 {
        text-align: left;
        font-size: 1.4rem;
        margin: 1rem 0;
        font-weight: bold;
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

    section .timeline {
        padding-left: $sectionPadding;
        padding-right: $sectionPadding;
    }
</style>
