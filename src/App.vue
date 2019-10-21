<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
  @import './../node_modules/css-reset-and-normalize/scss/reset-and-normalize';
  @import './../node_modules/blear.scss.clearfix/src/index';
  @import './assets/scss/variables.scss';

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
    padding: 0 $sectionPadding;
  }

  .row {
    @include clearfix();
  }

  h2 {
    text-align: left;
    font-size: 2.4rem;
  }

  .timeline-wrapper {

    .ps__rail-x {
      display: none !important;
    }

    .ps__rail-y {
      z-index: 6;
    }
  }
</style>
