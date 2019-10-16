<template>
    <div class="timeline">
        <div class="row">
            <div class="event left">
                <h3>Event Title</h3>
                <p>Some bad things happened. This is a description of those things. They were bad. Stupid things.</p>
            </div>
        </div>

        <div class="row">
            <div class="event condensed left">
                <h3>Event Title</h3>
                <p>Some bad things happened. This is a description of those things. They were bad. Stupid things.</p>
            </div>
        </div>

        <div class="row">
            <div class="event condensed left">
                <h3>Event Title</h3>
                <p>Some bad things happened. This is a description of those things. They were bad. Stupid things.</p>
            </div>
        </div>

        <div class="row">
            <div class="event right">
                <h3>Event Title</h3>
                <p>Some bad things happened. This is a description of those things. They were bad. Stupid things.</p>
            </div>
        </div>

        <div class="row">
            <div class="event condensed right">
                <h3>Event Title</h3>
                <p>Some bad things happened. This is a description of those things. They were bad. Stupid things.</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";

    @Component
    export default class TimeLine extends Vue {
    }
</script>

<style scoped lang="scss">
    @import './../assets/scss/variables.scss';

    $timelineWidth: 8px;
    $eventToTimelineMargin: 50px;

    $eventDotSize: 50px;
    $condensedEventDotSize: 30px;

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
            background-color: grey;
            z-index: 1;
        }

        .row {
            position: relative;
            z-index: 2;
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

        &:after {
            display: block;
            content: '';
            width: $eventDotSize;
            height: $eventDotSize;
            background-color: $backgroundColor;
            border-radius: $eventDotSize / 2;
            border: $timelineWidth solid grey;
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
</style>
