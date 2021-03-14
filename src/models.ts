/**
 * A chat id ends with `@c.us` or `@g.us` for group chats.
 * 
 * Example:
 * 
 * A group chat: `"447123456789-1445627445@g.us"`
 * A group chat: `"447123456789@g.us"`
 * 
 */
export type ChatId = string;

/**
 * A group chat ends with `@g.us` and usually has two parts, the timestamp of when it was created, and the user id of the number that created the group. For example `[creator number]-[timestamp]@g.us`
 * 
 * Example:
 * 
 * `"447123456789-1445627445@g.us"`
 */
export type GroupChatId = string;

/**
 * A contact id ends with `@c.us` and only contains the number of the contact. For example, if the country code of a contact is `44` and their number is `7123456789` then the contact id would be `447123456789@c.us`
 * 
 * Example:
 * 
 * `"447123456789@c.us"`
 */
export type ContactId = string;

/**
 * The id of a message. The format is `[boolean]_[ChatId]_[random character strin]`
 * 
 * Example:
 * 
 * `"false_447123456789@c.us_9C4D0965EA5C09D591334AB6BDB07FEB"`
 */
export type MessageId = string;

/**
 * This is a generic type alias for the content of a message
 * 
 * Example:
 * 
 * `"hello!"`
 */
export type Content = string;

/**
 * 
 * Data URLs, URLs prefixed with the data: scheme, allow content creators to embed small files inline in documents. They were formerly known as "data URIs" until that name was retired by the WHATWG.
 * 
 * 
 * Data URLs are composed of four parts: a prefix (data:), a MIME type indicating the type of data, an optional base64 token if non-textual, and the data itself:
 * 
 * Example:
 * `"data:[<mediatype>][;base64],<data>"`
 * 
 * Learn more here: https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
 */
export type DataURL = string;

/**
 * Base64 is basically a file encoded as a string.
 * 
 * Base64 is a group of similar binary-to-text encoding schemes that represent binary data in an ASCII string format by translating it into a radix-64 representation. The term Base64 originates from a specific MIME content transfer encoding.
 * 
 * Learn more here: https://developer.mozilla.org/en-US/docs/Glossary/Base64
 */
export type Base64 = string;

/**
 * The relative or absolute path of a file
 * 
 * Learn more here: https://www.w3schools.com/html/html_filepaths.asp
 */
export type FilePath = string;

export type StickerMetadata = {
    /**
     * The author of the sticker
     * @default ``
     */
    author: string,
    /**
     * The pack of the sticker
     * @default ``
     */
    pack: string
    /**
     * Attempt to remove the background of the sticker. Only valid for paid licenses. 
     * options:
     *  `true`  - remove background after resizing
     *  `HQ`    - remove background before resizing (i.e on original photo)
     * @default `false`
     */
    removebg ?: boolean | string
    /**
     * Setting this to `true` will skip the resizing/square-cropping of the sticker. It will instead 'letterbox' the image with a transparent background.
     */
    keepScale ?: boolean
    /**
     * Your Discord ID to get your onto the sticker leaderboard!
     */
    discord ?: string
  }

  export type Mp4StickerConversionProcessOptions = {
    /**
     * Desired Frames per second of the sticker output
     * @default `10`
     */
    fps?: number;
    /**
     * The video start time of the sticker
     * @default `00:00:00.0`
     */
    startTime?: string;
    /**
     * The video end time of the sticker. By default, stickers are made from the first 5 seconds of the video
     * @default `00:00:05.0`
     */
    endTime?: string;
    /**
     * The amount of times the video loops in the sticker. To save processing time, leave this as 0
     * default `0`
     */
    loop?: number;
    /**
     * Centres and crops the video.
     * default `true`
     */
    crop?: boolean;
    /**
     * A number representing the WxH of the output sticker (default `512x512`). Lowering this number is a great way to process longer duration stickers. The max value is `512`.
     * default `512`
     */
    square ?: number
  }