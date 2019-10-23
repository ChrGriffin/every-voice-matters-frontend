<template>
    <header>
        <h1>{{ title }}</h1>
    </header>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';

    @Component({})
    export default class PageHeader extends Vue {
        @Prop() public title!: string;
    }
</script>

<style scoped lang="scss">
    @import '../assets/scss/variables';

    header {
        padding: 5rem 0 6rem;
        background: black;
    }

    h1 {
        font-size: 6rem;
        color: $white;
    }
</style>
