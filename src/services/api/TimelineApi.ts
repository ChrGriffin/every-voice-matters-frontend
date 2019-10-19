import {Event, EventAttachmentType} from './types';

export default class TimelineApi {

    public getEvents(): Event[] {
        return [
            {
                name: 'Blitzchung Makes Pro-Hong Kong Statement',
                text: 'During a post-match interview, Hearthstone Grandmasters competitor Blitzchung makes a statement supporting Hong Kong\'s freedom.',
                condensed: false,
                time: new Date('October 6, 2019 00:00:00 EDT'),
                icon: require('./../../assets/images/hongkong.svg'),
                attachments: [
                    {
                        type: EventAttachmentType.url,
                        value: 'https://www.theverge.com/2019/10/8/20904308/hearthstone-player-blitzchung-hong-kong-protesters-ban-blizzard',
                        label: 'The Verge Report',
                    },
                ],
            },
            {
                name: 'Hearthstone Grandmasters Asia-Pacific Ruling',
                text: 'Blizzard Entertainment rules that Blitzchung\'s statement violates their tournament rules. They ban Blitzchung from competing for 12 months, revoke his prize winnings, and state that they will "immediately cease working with both casters" who conducted the interview. Many fans believe this is to appease the Chinese Communist Party, and react extremely negatively, kickstarting the #BoycottBlizzard movement.',
                condensed: false,
                time: new Date('2019-10-08T04:40:00+00:00'),
                icon: require('./../../assets/images/hearthstone.svg'),
                attachments: [
                    {
                        type: EventAttachmentType.url,
                        value: 'https://playhearthstone.com/en-us/blog/23179289',
                        label: 'Hearthstone Blog Post',
                    },
                ],
            },
            {
                name: 'Official Hearthstone Weibo Response',
                text: 'Blizzard\'s official Hearthstone Weibo (a Chinese social media site) account posts a response to Blitzchung\'s statement. In it, they profess "strong indignation and condemnation" and promise to "resolutely safeguard national [Chinese] dignity".',
                condensed: false,
                time: new Date('October 8, 2019 00:48:00 EDT'),
                icon: require('./../../assets/images/weibo.svg'),
                attachments: [
                    {
                        type: EventAttachmentType.url,
                        value: 'https://www.thegamer.com/blizzard-official-chinese-account-national-dignity-china/',
                        label: 'TheGamer Report with Translated Post',
                    },
                    {
                        type: EventAttachmentType.url,
                        value: 'https://www.weibo.com/3229779100/Iax22g4xQ?from=page_1006063229779100_profile&wvr=6&mod=weibotime&type=comment',
                        label: 'Original Weibo Post',
                    },
                    {
                        type: EventAttachmentType.image,
                        value: 'https://static2.thegamerimages.com/wordpress/wp-content/uploads/2019/10/resolutely-safeguard-national-dignity-hearthstone.jpg?q=50&fit=crop&w=738&h=388&dpr=1.5',
                        label: 'Screenshot of original Weibo post and translation from Chinese into English',
                    },
                ],
            },
            {
                name: 'Blizzard Employees Cover Value Plaques',
                text: 'Blizzard employees, upset with Blizzard\'s harsh punishment of Blitzchung, cover up the plaques outside Blizzard\'s offices that read "Every Voice Matters" and "Think Globally", respectively.',
                condensed: true,
                time: new Date('October 8, 2019 14:38:00 EDT'),
                icon: null,
                attachments: [
                    {
                        type: EventAttachmentType.url,
                        value: 'https://twitter.com/lackofrealism/status/1181639970332659712',
                        label: 'Original Twitter Post',
                    },
                    {
                        type: EventAttachmentType.image,
                        value: 'https://pbs.twimg.com/media/EGYGUGcU0AEFn_p?format=png&name=small',
                        label: 'Photo of plaque outside Blizzard HQ covered up with a sheet of paper',
                    },
                ],
            },
            {
                name: '1000-year Bans for Discussing Hong Kong on Blizzard Forums',
                text: 'Players posting about the Hong Kong situation and Blizzard\'s deference to the Chinese government begin receiving 1000-year forum bans for "trolling".',
                condensed: true,
                time: new Date('October 8, 2019 22:39:52 EDT'),
                icon: null,
                attachments: [
                    {
                        type: EventAttachmentType.url,
                        value: 'https://www.reddit.com/r/hearthstone/comments/dfarxs/banned_from_blizz_forums_for_1000_years_for/',
                        label: 'Original Reddit Post',
                    },
                    {
                        type: EventAttachmentType.image,
                        value: 'https://external-preview.redd.it/GNSSTwFHNBJjCWpjCtRzwIoYOqPeLLwS7qzG9qtanQM.png?width=960&crop=smart&auto=webp&s=9dcdbdec0946c9a67eb7899786b51d77dbe5b343',
                        label: 'Screenshot of user banned until October 8, 3019 for "Trolling"',
                    },
                ],
            },
            {
                name: 'Mei Supports the Hong Kong Protest',
                text: 'The Overwatch character Mei begins to emerge as a symbol of the Hong Kong protest amongst gamers, partially due to an effort by Western gamers to have Overwatch banned in China.',
                condensed: false,
                time: new Date('October 8, 2019 12:57:12 EDT'),
                icon: require('./../../assets/images/mei.svg'),
                attachments: [
                    {
                        type: EventAttachmentType.url,
                        value: 'https://www.reddit.com/r/HongKong/comments/df2rz7/it_would_be_such_a_shame_if_mei_from_overwatch/',
                        label: 'Original Reddit Post',
                    },
                ],
            },
            {
                name: 'Hearthstone Caster Brian Kibler Quits in Protest',
                text: 'Brian Kibler, a popular Hearthstone pro gamer and caster, issues a statement that he will not be involved in the Grandmasters tournament "unless something changes". ',
                condensed: true,
                time: new Date('2019-10-09T07:31:35-07:00'),
                icon: null,
                attachments: [
                    {
                        type: EventAttachmentType.url,
                        value: 'http://bmkgaming.com/statement-on-blitzchung/',
                        label: 'Original Blog Post',
                    },
                ],
            },
            {
                name: 'Blizzard Employees Walk Out in Protest',
                text: 'A small group of Blizzard employees stage a walkout to protest Blizzard\'s harsh punishment of Blitzchung.',
                condensed: true,
                time: new Date('2019-10-09T20:53:41+00:00'),
                icon: null,
                attachments: [
                    {
                        type: EventAttachmentType.url,
                        value: 'https://www.pcgamer.com/blizzard-employees-staged-a-walkout-over-hearthstone-grandmasters-suspension/',
                        label: 'PCGamer Report',
                    },
                    {
                        type: EventAttachmentType.image,
                        value: 'https://cdn.mos.cms.futurecdn.net/orBh3t7KRGWgGQt9hnqMa4-650-80.jpg',
                        label: 'Photo of Blizzard employees protesting with umbrellas outside',
                    },
                ],
            },
            {
                name: 'Hong Kong Battletags Disallowed',
                text: 'Players attempting to change their Battletags to include "HongKong" are met with an error that it is "in violation of [their] naming guidelines."',
                condensed: true,
                time: new Date('October 9, 2019 19:02:32 EDT'),
                icon: null,
                attachments: [
                    {
                        type: EventAttachmentType.url,
                        value: 'https://www.reddit.com/r/hearthstone/comments/dfp0w5/it_seems_blizzard_no_longer_allows_hong_kong_to/f34x3v7',
                        label: 'Original Reddit Post',
                    },
                    {
                        type: EventAttachmentType.image,
                        value: 'https://i.imgur.com/jfS2Ata.png',
                        label: 'Screenshot of user being unable to change their Battletag to FreeHongKong',
                    },
                ],
            },
            {
                name: 'J. Allen Brack Responds to Controversy',
                text: 'The president of Blizzard Entertainment posts an open letter to the Blizzard community. In it, he concedes that Blizzard may have "reacted too quickly", and reduces Blitzchung\'s suspension from 12 months to 6 months, and restores his winnings. He also reduces the casters\' suspensions to 6 months. No apology is offered to Blitzchung, the casters, or the community, and he makes it clear that streamers/competitors will continue to be banned for bringing up political topics.' ,
                condensed: false,
                time: new Date('Sat Oct 12 2019 00:18:58 GMT+0000'),
                icon: require('./../../assets/images/blizzard.svg'),
                attachments: [
                    {
                        type: EventAttachmentType.url,
                        value: 'https://news.blizzard.com/en-us/blizzard/23185888/regarding-last-weekend-s-hearthstone-grandmasters-tournament',
                        label: 'Blizzard Blog Post by J. Allen Brack',
                    },
                ],
            },
            {
                name: 'Riot Games Asks Players to Not Discuss Hong Kong',
                text: 'John Needham, Global Head of League of Legends eSports, posts an open letter asking both casters and players to not discuss sensitive or political topics such as Hong Kong on the air.',
                condensed: true,
                time: new Date('Oct 11, 2019 13:35:00 EDT'),
                icon: null,
                attachments: [
                    {
                        type: EventAttachmentType.url,
                        value: 'https://twitter.com/lolesports/status/1182711322791698432',
                        label: 'Original Twitter Post',
                    },
                ],
            },
            {
                name: 'Blizzard Cancels Switch Overwatch Launch Event',
                text: 'With less than 48 hours until the official launch event for Overwatch on the Nintendo Switch, Blizzard announces that they are cancelling the event. No official reason is given. This is widely speculated to be due to the potential for public protests at the event.',
                condensed: false,
                time: new Date('Oct 15, 2019, 09:32:00 EDT'),
                icon: require('./../../assets/images/switch.svg'),
                attachments: [
                    {
                        type: EventAttachmentType.url,
                        value: 'https://twitter.com/NintendoNYC/status/1183940424467173378?ref_src=twsrc%5Etfw',
                        label: 'Original Twitter Post',
                    },
                ],
            },
            {
                name: 'US Congress Sends Letter to Bobby Kotick',
                text: 'A letter signed by Ron Wyden and Marco Rubio (US Senators), and Alexandria Ocasio-Cortez, Mike Gallagher, and Tom Malinowski (US Members of Congress) is sent to Bobby Kotick, the CEO of Blizzard Activision. The letter chastises Blizzard Activision for seemingly caving to pressure from the Chinese government, references the #BoycottBlizzard movement, and suggests the company reverse course.',
                condensed: false,
                time: new Date('Oct 18, 2019, 16:00:00 EDT'),
                icon: require('./../../assets/images/congress.svg'),
                attachments: [
                    {
                        type: EventAttachmentType.url,
                        value: 'https://www.washingtonpost.com/video-games/2019/10/18/activision-blizzard-under-fire-bipartisan-group-congress-members-over-china-relations/',
                        label: 'Washington Post Report'
                    },
                    {
                        type: EventAttachmentType.url,
                        value: 'https://www.pcgamer.com/bipartisan-members-of-congress-call-on-blizzard-to-reverse-blitzchung-punishment/',
                        label: 'PCGamer Report'
                    },
                    {
                        type: EventAttachmentType.image,
                        value: 'https://i.redd.it/k1yb5neuxct31.jpg',
                        label: '',
                    },
                ],
            },
        ];
    }
}
