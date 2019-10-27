<template>
    <section>
        <a :href="url" target="_blank" class="content">
            <chevron-right />
            <chevron-right />
            <h2>{{ text }}</h2>
            <chevron-left />
            <chevron-left />
        </a>
    </section>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import ChevronRight from './../assets/images/chevron-right-solid.svg?inline';
    import ChevronLeft from './../assets/images/chevron-left-solid.svg?inline';

    @Component({
        components: { ChevronRight, ChevronLeft },
    })
    export default class AnnouncementSection extends Vue {
        @Prop() url!: string;
        @Prop() text!: string;
    }
</script>

<style scoped lang="scss">
    @import '../assets/scss/variables';

    $transitionTime: 0.15s;
    $chevronOpacity: 0.2;

    section {
        background: $red;
        padding: 0;
        overflow: hidden;

        .content {
            display: flex;
            align-items: center;
            justify-content: center;
            text-decoration: none;
            padding: 4rem 0;
            transform: scale(1, 1);
            transition: transform $transitionTime ease;

            h2 {
                color: $white;
                margin: 0 1rem;
                font-size: 5rem;
                display: inline-block;
            }

            svg {
                color: $white;
                height: 6rem;
                opacity: $chevronOpacity;
                animation: fadeToggle 2s ease infinite;

                &:nth-child(2) {
                    animation-delay: 0.5s;
                }

                &:nth-child(4) {
                    animation-delay: 0.5s;
                }
            }

            &:hover {
                transform: scale(1.1, 1.1);
                transition: transform $transitionTime ease;
            }
        }
    }

    @media screen and (max-width: $mediumScreen) {

        section {

            .content {
                padding: 3.5rem 0;

                h2 {
                    font-size: 4.4rem;
                }

                svg {
                    display: none;
                }
            }
        }
    }

    @media screen and (max-width: $smallScreen) {

        section {

            .content {
                padding: 3rem 0;

                h2 {
                    font-size: 3rem;
                }
            }
        }
    }

    @keyframes fadeToggle {
        10% {
            opacity: $chevronOpacity;
        }

        50% {
            opacity: 1;
        }

        90% {
            opacity: $chevronOpacity;
        }
    }
</style>
