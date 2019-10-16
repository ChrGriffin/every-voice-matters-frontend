import { Event } from './types';

export default class TimelineApi {

    public getEvents(): Event[] {
        return [
            {
                name: 'Event 1',
                text: 'Some bad things happened. This is a description of those things. They were bad. Stupid things.',
                condensed: false,
                time: new Date('October 8, 2019 11:13:00'),
            },
            {
                name: 'Event 2',
                text: 'Some bad things happened. This is a description of those things. They were bad. Stupid things.',
                condensed: true,
                time: new Date('October 8, 2019 16:42:00'),
            },
            {
                name: 'Event 3',
                text: 'Some bad things happened. This is a description of those things. They were bad. Stupid things.',
                condensed: true,
                time: new Date('October 9, 2019 11:13:00'),
            },
            {
                name: 'Event 4',
                text: 'Some bad things happened. This is a description of those things. They were bad. Stupid things.',
                condensed: false,
                time: new Date('October 9, 2019 16:42:00'),
            },
            {
                name: 'Event 5',
                text: 'Some bad things happened. This is a description of those things. They were bad. Stupid things.',
                condensed: true,
                time: new Date('October 9, 2019 16:43:00'),
            },
            {
                name: 'Event 6',
                text: 'Some bad things happened. This is a description of those things. They were bad. Stupid things.',
                condensed: false,
                time: new Date('October 9, 2019 21:42:00'),
            },
            {
                name: 'Event 7',
                text: 'Some bad things happened. This is a description of those things. They were bad. Stupid things.',
                condensed: false,
                time: new Date('October 10, 2019 16:42:00'),
            },
        ];
    }
}
