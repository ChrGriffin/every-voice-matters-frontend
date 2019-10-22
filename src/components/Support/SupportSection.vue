<template>
    <section id="support">
        <article>
            <boycott-blizzard />
        </article>

        <article>
            <free-hong-kong />
        </article>
    </section>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import BoycottBlizzard from '@/components/Support/BoycottBlizzard.vue';
    import FreeHongKong from '@/components/Support/FreeHongKong.vue';

    @Component({
        components: {FreeHongKong, BoycottBlizzard}
    })

    export default class SupportSection extends Vue {
    }
</script>

<style lang="scss" scoped>
    @import './../../assets/scss/variables';

    section {
        display: flex;

        article {
            flex: 1;

            &:first-child {
                padding-right: $sectionPadding / 2;
            }

            &:last-child {
                padding-left: $sectionPadding / 2;
            }
        }
    }
</style>
