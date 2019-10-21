<template>
    <div class="item">
        <img :src="image" :alt="label" />
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';

    @Component({})
    export default class FanArtItem extends Vue {
        @Prop() public image!: string;
        @Prop() public label!: string;
    }
</script>

<style lang="scss" scoped>
    .item {
        margin-bottom: 20px;
        width: calc(20% - 16px);
    };

    img {
        width: 100%;
    }
</style>
