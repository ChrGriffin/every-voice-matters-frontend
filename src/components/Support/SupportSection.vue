<template>
    <section id="support">
        <div class="row">
            <article>
                <boycott-blizzard />
            </article>

            <article>
                <free-hong-kong />
            </article>
        </div>
    </section>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import BoycottBlizzard from '@/components/Support/BoycottBlizzard.vue';
    import FreeHongKong from '@/components/Support/FreeHongKong.vue';

    @Component({
        components: { FreeHongKong, BoycottBlizzard },
    })

    export default class SupportSection extends Vue {
    }
</script>

<style lang="scss" scoped>
    @import './../../assets/scss/variables';

    .row {
        max-width: 80rem;
        margin: 0 auto;
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
