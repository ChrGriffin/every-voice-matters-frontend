<template>
    <div :class="className">
        <h3>{{ name }}</h3>
        <p>{{ text }}</p>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import {Direction} from './types';

    @Component
    export default class TimeLineEvent extends Vue {
        @Prop() public name!: string;
        @Prop() public text!: string;
        @Prop() public condensed!: boolean;
        @Prop() public direction!: Direction;

        get className(): string {
            let classname = 'event ';
            if (this.condensed) {
                classname += 'condensed ';
            }

            classname += this.direction;
            return classname;
        }
    }
</script>

<style scoped lang="scss">
    @import './../assets/scss/variables.scss';

    .timeline {
        position: relative;

        &:after {
            content: '';
            display: block;
            position: absolute;
            top: 0;
            bottom: 0;
            left: calc(50% - (#{$timelineWidth} / 2));
            width: $timelineWidth;
            background: -webkit-linear-gradient(top, rgba($red, 0) 1%, rgba($red, 1) 8%, rgba($red, 1) 92%, rgba($red, 0) 99%);
            z-index: 1;
        }

        .row {
            position: relative;
            z-index: 2;

            &:first-child {

                .event {
                    margin-top: 2rem;
                }
            }

            &:last-child {

                .event {
                    margin-bottom: 2rem;
                }
            }
        }
    }

    .event {
        position: relative;
        display: block;
        padding: 1rem;
        width: calc(50% - #{$eventToTimelineMargin});
        background-color: $white;
        margin-bottom: 1rem;
        box-shadow: 0 6px 6px -6px rgba(0, 0, 0, 0.5);
        margin-top: -2rem;

        &:after {
            display: block;
            content: '';
            width: $eventDotSize;
            height: $eventDotSize;
            background-color: $backgroundColor;
            border-radius: $eventDotSize / 2;
            border: $timelineWidth solid $red;
            position: absolute;
            top: calc(50% - (#{$eventDotSize} / 2));
        }

        &.left {
            float: left;
            text-align: right;

            &:after {
                right: calc(-#{$eventToTimelineMargin} - (#{$eventDotSize} / 2));
            }
        }

        &.right {
            float: right;
            text-align: left;

            &:after {
                left: calc(-#{$eventToTimelineMargin} - (#{$eventDotSize} / 2));
            }
        }

        &.condensed {
            width: calc(30% - #{$eventToTimelineMargin});
            box-shadow: 0 3px 6px -6px rgba(0, 0, 0, 0.5);
            margin-top: 0;

            &:after {
                width: $condensedEventDotSize;
                height: $condensedEventDotSize;
                border-radius: $condensedEventDotSize / 2;
                top: calc(50% - (#{$condensedEventDotSize} / 2));
            }

            &.left {
                margin-left: calc(20% + 1px);

                &:after {
                    right: calc(-#{$eventToTimelineMargin} - (#{$condensedEventDotSize} / 2));
                }
            }

            &.right {
                margin-right: 20%;

                &:after {
                    left: calc(-#{$eventToTimelineMargin} - (#{$condensedEventDotSize} / 2));
                }
            }

            h3 {
                font-size: 1rem;
                font-style: italic;
                margin-bottom: 0;
            }

            p {
                display: none;
            }
        }

        h3 {
            font-size: 1.4rem;
            margin-bottom: 0.8rem;
        }
    }

    @media screen and (max-width: $mediumScreen) {

        .timeline {

            &:after {
                left: unset;
                right: calc(#{$timelineWidth - ($eventDotSize / 2)} + #{$sectionPadding});
            }
        }

        .event {
            margin-top: 0;
            width: calc(100% - #{$timelineWidth - ($eventDotSize / 2)} - #{$eventDotSize + ($timelineWidth / 2)} - #{$sectionPadding});

            &.left, &.right {
                float: left;
                text-align: right;

                &:after {
                    left: unset;
                    right: -($eventDotSize / 2) - $eventToTimelineMargin;
                }
            }

            &.condensed {
                width: calc(60% - #{$timelineWidth - ($eventDotSize / 2)} - #{$eventDotSize + ($timelineWidth / 2)} - #{$sectionPadding});

                &.left, &.right {
                    margin-left: 40%;

                    &:after {
                        left: unset;
                        right: calc(-#{$eventToTimelineMargin} - (#{$condensedEventDotSize} / 2));
                    }
                }
            }
        }
    }
</style>
