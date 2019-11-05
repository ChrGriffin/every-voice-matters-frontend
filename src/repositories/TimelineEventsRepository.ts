import {Event, EventAttachmentType} from './types';

export default class TimelineEventsRepository {

    public getEvents(): Event[] {
        return [
            {
                name: 'Blitzchung Makes Pro-Hong Kong Statement',
                text: 'During a post-match interview, Hearthstone Grandmasters competitor Blitzchung makes a statement supporting Hong Kong\'s freedom.',
                condensed: false,
                time: new Date('October 6, 2019 00:00:00 EDT'),
                icon: require('../assets/images/hongkong.svg'),
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
                icon: require('../assets/images/hearthstone.svg'),
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
                icon: require('../assets/images/weibo.svg'),
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
                name: 'Collegiate Hearthstone Competitors Protest Blizzard',
                text: 'Near the end of a stream of an American Collegiate Hearthstone Championship match, the players on the American University team hold up a sign that reads, "Free Hong Kong, Boycott Blizz". The camera quickly cuts away.',
                condensed: true,
                time: new Date('October 8, 2019 21:28:00 EDT'),
                icon: null,
                attachments: [
                    {
                        type: EventAttachmentType.url,
                        value: 'https://youtu.be/u_mmWMN6K40?t=3094',
                        label: 'YouTube Video',
                    },
                    {
                        type: EventAttachmentType.url,
                        value: 'https://www.pcgamer.com/collegiate-hearthstone-championship-match-ends-with-call-to-free-hong-kong-boycott-blizz/',
                        label: 'PCGamer Report',
                    },
                ],
            },
            {
                name: 'Mark Kern Joins #BoycottBlizzard',
                text: 'Mark Kern, Team Lead for the original World of Warcraft, cancels his subscription in protest. In his message to Blizzard, he condemns their "fear of China", and asks them to "stand up for what is right."',
                condensed: true,
                time: new Date('October 8, 2019 22:25:00 EDT'),
                icon: null,
                attachments: [
                    {
                        type: EventAttachmentType.url,
                        value: 'https://twitter.com/grummz/status/1181757457527267328?lang=en',
                        label: 'Original Twitter Post',
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
                icon: require('../assets/images/mei.svg'),
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
                name: 'American University Collegiate Hearthstone Team Forfeits in Protest',
                text: 'The American University Hearthstone Collegiate team, who earlier had held up a sign during their match that read "Free Hong Kong, Boycott Blizzard", remain unpunished by Blizzard. They forfeit their next match and the tournament in protest, calling it "hypocritical" to punish Blitzchung and not them.',
                condensed: true,
                time: new Date('Oct 10, 2019 00:00:00 EDT'),
                icon: null,
                attachments: [
                    {
                        type: EventAttachmentType.url,
                        value: 'https://www.usgamer.net/articles/collegiate-hearthstone-players-hold-up-free-hong-kong-boycott-blizzard-sign-during-match',
                        label: 'US Gamer Report',
                    },
                ],
            },
            {
                name: 'Hearthstone Caster Nathan "Admirable" Zamora Quits in Protest',
                text: 'Nathan Zamora, known also as "Admirable", releases a statement that he "cannot continue casting [Hearthstone]" without "change that would convince [him] that Blizzard will uphold their core of value of \'Every Voice Matters\'".',
                condensed: true,
                time: new Date('Oct 10, 2019 18:57:00 EDT'),
                icon: null,
                attachments: [
                    {
                        type: EventAttachmentType.url,
                        value: 'https://twitter.com/ThatsAdmirable/status/1182429866576138240',
                        label: 'Original Twitter Post',
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
                name: 'J. Allen Brack Responds to Controversy',
                text: 'The president of Blizzard Entertainment posts an open letter to the Blizzard community. In it, he concedes that Blizzard may have "reacted too quickly", and reduces Blitzchung\'s suspension from 12 months to 6 months, and restores his winnings. He also reduces the casters\' suspensions to 6 months. No apology is offered to Blitzchung, the casters, or the community, and he makes it clear that streamers/competitors will continue to be banned for bringing up political topics.' ,
                condensed: false,
                time: new Date('Sat Oct 12 2019 00:18:58 GMT+0000'),
                icon: require('../assets/images/blizzard.svg'),
                attachments: [
                    {
                        type: EventAttachmentType.url,
                        value: 'https://news.blizzard.com/en-us/blizzard/23185888/regarding-last-weekend-s-hearthstone-grandmasters-tournament',
                        label: 'Blizzard Blog Post by J. Allen Brack',
                    },
                ],
            },
            {
                name: 'Mei Statue Disappears from Blizzard Store',
                text: 'The statue of Mei - which had been accepting preorders - was suddenly removed from the Blizzard store. Notably, when other statues were sold out, the product pages remained with a message saying they were no longer available.',
                condensed: true,
                time: new Date('Oct 11, 2019 21:06:00 EDT'),
                icon: null,
                attachments: [
                    {
                        type: EventAttachmentType.url,
                        value: 'https://twitter.com/Grummz/status/1182824874659610626',
                        label: 'Original Twitter Post',
                    },
                ],
            },
            {
                name: 'Blizzard Cancels Switch Overwatch Launch Event',
                text: 'With less than 48 hours until the official launch event for Overwatch on the Nintendo Switch, Blizzard announces that they are cancelling the event. No official reason is given. This is widely speculated to be due to the potential for public protests at the event.',
                condensed: false,
                time: new Date('Oct 15, 2019, 09:32:00 EDT'),
                icon: require('../assets/images/switch.svg'),
                attachments: [
                    {
                        type: EventAttachmentType.url,
                        value: 'https://twitter.com/NintendoNYC/status/1183940424467173378?ref_src=twsrc%5Etfw',
                        label: 'Original Twitter Post',
                    },
                ],
            },
            {
                name: 'American University Collegiate Hearthstone Team Suspended',
                text: 'The American University Hearthstone Collegiate team, who earlier had held up a sign during their match that read "Free Hong Kong, Boycott Blizzard", and forfeited the tournament to protest their lack of punishment, is quietly suspended by Blizzard for six months. Team member Casey Chambers tweets that he "appreciate[s] all players being treated equally".',
                condensed: true,
                time: new Date('October 16, 2019 01:01:00 EDT'),
                icon: null,
                attachments: [
                    {
                        type: EventAttachmentType.url,
                        value: 'https://twitter.com/Xcelsior_GU/status/1184333609370619905',
                        label: 'Original Twitter Post',
                    },
                    {
                        type: EventAttachmentType.url,
                        value: 'https://www.pcgamer.com/hearthstone-collegiate-team-that-held-up-a-free-hong-kong-sign-has-been-suspended/',
                        label: 'PCGamer Report',
                    },
                ],
            },
            {
                name: 'US Congress Sends Letter to Bobby Kotick',
                text: 'A letter signed by Ron Wyden and Marco Rubio (US Senators), and Alexandria Ocasio-Cortez, Mike Gallagher, and Tom Malinowski (US Members of Congress) is sent to Bobby Kotick, the CEO of Blizzard Activision. The letter chastises Blizzard Activision for seemingly caving to pressure from the Chinese government, references the #BoycottBlizzard movement, and suggests the company reverse course.',
                condensed: false,
                time: new Date('Oct 18, 2019, 16:00:00 EDT'),
                icon: require('../assets/images/congress.svg'),
                attachments: [
                    {
                        type: EventAttachmentType.url,
                        value: 'https://www.washingtonpost.com/video-games/2019/10/18/activision-blizzard-under-fire-bipartisan-group-congress-members-over-china-relations/',
                        label: 'Washington Post Report',
                    },
                    {
                        type: EventAttachmentType.url,
                        value: 'https://www.pcgamer.com/bipartisan-members-of-congress-call-on-blizzard-to-reverse-blitzchung-punishment/',
                        label: 'PCGamer Report',
                    },
                    {
                        type: EventAttachmentType.image,
                        value: 'https://i.redd.it/k1yb5neuxct31.jpg',
                        label: 'Scanned letter to Robert Kotick from US Congress',
                    },
                ],
            },
            {
                name: 'Mitsubishi Pulls Blizzard Sponsorship',
                text: 'Mitsubishi Motors Taiwan releases a statement that it has officially withdrawn its sponsorship of Blizzard eSports events. The actual withdrawal of sponsorship occurred earlier in the month.',
                condensed: false,
                time: new Date('October 29, 2019 17:34:00 EDT'),
                icon: require('../assets/images/mitsubishi.svg'),
                attachments: [
                    {
                        type: EventAttachmentType.url,
                        value: 'https://www.theverge.com/2019/10/29/20939236/blizzard-china-hong-kong-protests-mitsubishi-hearthstone-ban-sponsorship-pulled',
                        label: 'The Verge Report',
                    },
                    {
                        type: EventAttachmentType.url,
                        value: 'https://www.thedailybeast.com/blizzard-sponsor-mitsubishi-bailed-after-the-company-punished-pro-hong-kong-gamer-blitzchung?ref=wrap',
                        label: 'The Daily Beast Report',
                    },
                ],
            },
            {
                name: 'J. Allen Brack Apologizes',
                text: 'The president of Blizzard Entertainment opens BlizzCon 2019 by addressing the controversy. While he does not directly refer to Hong Kong, China, or Blitzchung, he acknowledges that Blizzard "did not live up to the high standards that they set for [themselves]", and he apologizes and "accepts accountability".',
                condensed: false,
                time: new Date('November 1, 2019 14:06:00 EDT'),
                icon: require('../assets/images/blizzard.svg'),
                attachments: [
                    {
                        type: EventAttachmentType.url,
                        value: 'https://clips.twitch.tv/DarkBlitheGrasshopperPeoplesChamp',
                        label: 'Twitch Clip',
                    },
                    {
                        type: EventAttachmentType.url,
                        value: 'https://www.youtube.com/watch?v=CscJ58tRcEo',
                        label: 'YouTube Video',
                    },
                ],
            },
            {
                name: 'Protests Outside BlizzCon',
                text: 'Dozens of protestors demonstrate outside of BlizzCon before the opening ceremony and during the second day of the convention. The protest setup - which includes Hong Kong flags and a box truck with an enormous sign on the back - hands out free tee shirts featuring a popular image of Mei supporting Hong Kong.',
                condensed: true,
                time: new Date('November 1, 2019 13:09:00 EDT'),
                icon: null,
                attachments: [
                    {
                        type: EventAttachmentType.url,
                        value: 'https://www.polygon.com/2019/11/1/20943761/hong-kong-protests-blizzcon-2019-blitzchung',
                        label: 'Polygon Report',
                    },
                ],
            },
            {
                name: 'Q&A Panel Briefly Interrupted by Protestor',
                text: 'One of the fans asking a question at the World of Warcraft Q&A panel concludes his question with the slogan, "Free Hong Kong, revolution of our times". As he finishes his statement, a younger fan from the audience shouts the same, dashes to the mic, and states it into the microphone.',
                condensed: true,
                time: new Date('November 2, 2019 17:15:00 EDT'),
                icon: null,
                attachments: [
                    {
                        type: EventAttachmentType.url,
                        value: 'https://www.youtube.com/watch?v=1rcgIukAMo8',
                        label: 'YouTube Video',
                    },
                ],
            },
        ];
    }
}
