<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
  @import './../node_modules/css-reset-and-normalize/scss/reset-and-normalize';
  @import './../node_modules/blear.scss.clearfix/src/index';
  @import './assets/scss/variables.scss';

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
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
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

  section .timeline {
    padding-left: $sectionPadding;
    padding-right: $sectionPadding;
  }
</style>
