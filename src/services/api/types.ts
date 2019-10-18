export interface Event {
    name: string;
    text: string;
    condensed: boolean;
    time: Date;
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
