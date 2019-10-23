export interface Event {
    name: string;
    text: string;
    condensed: boolean;
    time: Date;
    icon: null|string;
    attachments: EventAttachment[];
}

export interface EventAttachment {
    type: EventAttachmentType;
    value: string;
    label: string;
}

export enum EventAttachmentType {
    url = 'url',
    image = 'image',
}

export interface CommunityArt {
    image: string;
    description: string;
    author: CommunityArtAuthor;
}

export interface CommunityArtAuthor {
    name: string;
    url: null|string;
}
