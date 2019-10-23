<template>
    <div class="timeline">
        <div class="row" v-for="event in events">
            <time-line-event :name="event.name"
                             :text="event.text"
                             :condensed="event.condensed"
                             :direction="getDirection(event)"
                             :date="event.time"
                             :icon="event.icon"
                             :urls="event.attachments.filter(filterUrls)"
                             :images="event.attachments.filter(filterImages)"/>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import TimelineApi from '@/services/repositories/TimelineApi';
    import { Event, EventAttachment, EventAttachmentType } from '@/services/repositories/types';
    import TimeLineEvent from '@/components/TimeLine/TimeLineEvent.vue';
    import { Direction } from '@/components/types';

    @Component({
        components: { TimeLineEvent },
    })

    export default class TimeLine extends Vue {
        @Prop({
            default: () => {
                return new TimelineApi();
            },
        }) public timelineApi!: TimelineApi;

        public events: Event[] = [];

        public getEvents(): void {
            this.events = this.timelineApi.getEvents();
        }

        public getDirection(event: Event): Direction {
            const eventIndex = this.events.indexOf(event);
            let direction = Direction.right;

            let currentIndex = 0;
            do {
                if (!this.events[currentIndex].condensed) {
                    direction = (direction === Direction.right ? Direction.left : Direction.right);
                }

                currentIndex++;
            }
            while (eventIndex >= currentIndex);

            return direction;
        }

        public filterUrls(attachment: EventAttachment): boolean {
            return attachment.type === EventAttachmentType.url;
        }

        public filterImages(attachment: EventAttachment): boolean {
            return attachment.type === EventAttachmentType.image;
        }

        private mounted(): void {
            this.getEvents();
        }
    }
</script>

<style scoped lang="scss">
    @import '../../assets/scss/variables';

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
            background: -webkit-linear-gradient(top, rgba($red, 0) 0.5%, rgba($red, 1) 3%, rgba($red, 1) 97%, rgba($red, 0) 99.5%);
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

    @media screen and (max-width: $mediumScreen) {

        .timeline {

            &:after {
                left: unset;
                right: calc(#{$timelineWidth - (($eventDotSize - $timelineWidth) / 2)} + #{$sectionPadding * 2} + #{$timelineSmallScreenRightOffset});
            }
        }
    }
</style>
