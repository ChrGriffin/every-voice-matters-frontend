<template>
    <div :class="className" @mouseover="hover = true" @mouseleave="hover = false" ref="event">
        <span class="date">{{ humanReadableDate }}</span>
        <h3>{{ name }}</h3>
        <div class="content" :style="(condensed ? `height: ${contentHeight};` : '')">
            <p>{{ text }}</p>
            <a v-for="url in urls" :href="url.value" target="_blank">{{ url.label }}</a>
        </div>
        <img v-if="condensed === false && icon !== null" class="icon" :src="icon" :alt="'Icon for event: ' + name" />
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue, Watch} from 'vue-property-decorator';
    import { Direction } from '../types';
    import { EventAttachment } from '@/repositories/types';

    @Component
    export default class TimeLineEvent extends Vue {
        @Prop() public name!: string;
        @Prop() public text!: string;
        @Prop() public condensed!: boolean;
        @Prop() public date!: Date;
        @Prop() public icon!: null|string;
        @Prop() public direction!: Direction;
        @Prop() public urls!: EventAttachment[];
        @Prop() public images!: EventAttachment[];

        public hover: boolean = false;
        public contentHeight: string = '0';

        @Watch('hover')
        public onHoverChanged(val: boolean, oldVal: boolean) {
            if (!this.condensed) {
                return;
            }

            this.contentHeight = val ? this.getPotentialContentHeight().toString() + 'px' : '0';
        }

        get className(): string {
            let classname = 'event ';

            if (this.condensed) {
                classname += 'condensed ';
            }

            classname += this.direction;
            return classname;
        }

        get humanReadableDate(): string {
            const months = [
                'January',
                'February',
                'March',
                'April',
                'May',
                'June',
                'July',
                'August',
                'September',
                'October',
                'November',
                'December',
            ];
            return `${months[this.date.getMonth()]} ${this.date.getDate()}, ${this.date.getUTCFullYear()}`;
        }

        private getPotentialContentHeight(): number {

            // @ts-ignore
            const clone = this.$refs.event.cloneNode(true);
            clone.className = clone.className + ' getHeightClone';

            const body = document.querySelector('.timeline');
            if (body === null) {
                return 0;
            }
            body.appendChild(clone);

            clone.querySelector('.content').style.height = 'auto';
            const height = parseInt(clone.querySelector('.content').offsetHeight);
            body.removeChild(clone);

            return height;
        }
    }
</script>

<style scoped lang="scss">
    @import '../../assets/scss/variables';

    $iconUnderflow: $eventDotSize * 0.15;

    .event {
        position: relative;
        display: block;
        padding: 1rem;
        width: calc(50% - #{$eventToTimelineMargin});
        background-color: $white;
        margin-bottom: 1rem;
        box-shadow: 0 6px 6px -6px rgba(0, 0, 0, 0.5);
        margin-top: -2rem;
        text-align: justify;

        &:after {
            display: block;
            content: '';
            width: $eventDotSize;
            height: $eventDotSize;
            background-color: $red;
            border-radius: $eventDotSize / 2;
            border: $timelineWidth solid $red;
            position: absolute;
            top: calc(50% - (#{$eventDotSize} / 2));
            pointer-events: none;
        }

        .icon {
            position: absolute;
            width: $eventDotSize - $iconUnderflow;
            height: $eventDotSize - $iconUnderflow;
            top: calc(50% - #{($eventDotSize - $iconUnderflow) / 2});
            z-index: 3;
        }

        &.left {
            float: left;
            text-align: right;

            &:after {
                right: -$eventToTimelineMargin - ($eventDotSize / 2);
            }

            .icon {
                right: -$eventToTimelineMargin - ($eventDotSize / 2) + ($iconUnderflow / 2);
            }

            p {
                text-align: justify;
            }
        }

        &.right {
            float: right;

            &:after {
                left: -$eventToTimelineMargin - ($eventDotSize / 2);
            }

            .icon {
                left: -$eventToTimelineMargin - ($eventDotSize / 2) + ($iconUnderflow / 2);
            }
        }

        &.condensed {
            width: calc(40% - #{$eventToTimelineMargin});
            box-shadow: 0 3px 6px -6px rgba(0, 0, 0, 0.5);
            margin-top: 0;

            &:after {
                width: $condensedEventDotSize;
                height: $condensedEventDotSize;
                border-radius: $condensedEventDotSize / 2;
                top: calc(50% - (#{$condensedEventDotSize} / 2));
                background-color: $backgroundColor;
            }

            &.left {
                margin-left: calc(10% + 1px);

                &:after, .icon {
                    right: calc(-#{$eventToTimelineMargin} - (#{$condensedEventDotSize} / 2));
                }
            }

            &.right {
                margin-right: 10%;

                &:after {
                    left: calc(-#{$eventToTimelineMargin} - (#{$condensedEventDotSize} / 2));
                }
            }

            h3 {
                font-size: 1rem;
                font-style: italic;
                margin-bottom: 0;
            }

            .content {
                overflow: hidden;
                height: 0;
                transition: height 0.25s ease;

                p {
                    margin-top: 1rem;
                    font-size: 0.9rem;
                }

                a {
                    font-size: 0.8rem;
                }
            }
        }

        .date {
            font-style: italic;
            font-size: 0.8rem;
        }

        h3 {
            font-size: 1.4rem;
            margin-top: 0.5rem;
            margin-bottom: 0.8rem;
        }

        .content {

            a {
                display: inline-block;
                margin-top: 1rem;
                font-size: 0.9rem;
                font-style: italic;
                color: $black;

                &:hover, &:active {
                    color: $black;
                }

                &:not(:last-of-type) {

                    &:after {
                        display: inline-block;
                        content: '|';
                        padding: 0 0.5rem;
                    }
                }
            }

            img {
                display: none;
            }
        }
    }

    @media screen and (max-width: $mediumScreen) {

        .event {
            margin-top: 0;
            width: calc(100% - #{$timelineWidth - ($eventDotSize / 2)} - #{$eventDotSize + ($timelineWidth / 2)} - #{$sectionPadding});

            &.left, &.right {
                float: left;
                text-align: right;

                &:after {
                    left: unset;
                    right: -(($eventDotSize - $timelineWidth) / 2) - $eventToTimelineMargin + $timelineSmallScreenRightOffset;
                }

                p {
                    text-align: justify;
                }

                .icon {
                    left: unset;
                    right: -$eventToTimelineMargin - (($eventDotSize - $timelineWidth) / 2) + ($iconUnderflow / 2) + $timelineSmallScreenRightOffset;
                }
            }

            &.condensed {
                width: calc(70% - #{$timelineWidth - ($eventDotSize / 2)} - #{$eventDotSize + ($timelineWidth / 2)} - #{$sectionPadding});

                &.left, &.right {
                    margin-left: 30%;

                    &:after {
                        left: unset;
                        right: calc(-#{$eventToTimelineMargin} - #{($condensedEventDotSize - $timelineWidth) / 2} + #{$timelineSmallScreenRightOffset});
                    }
                }
            }
        }
    }

    @media screen and (max-width: $smallScreen) {
        .event {

            &.condensed {
                width: calc(100% - #{$timelineWidth - ($eventDotSize / 2)} - #{$eventDotSize + ($timelineWidth / 2)} - #{$sectionPadding});

                &.left, &.right {
                    margin-left: 0;
                }

                .content {
                    height: auto !important;
                }
            }

            &.left, &.right {
                text-align: left;

                p {
                    text-align: left;
                }
            }
        }
    }
</style>
