import Config from './Config';

type ConfigDataType = {
    minWordLength:number,
    maxWordLength:number,
    sentenceDelimiters:string[]
};

/** Keywords configurations. */
export default class KeywordsConfig extends Config {
    static MIN_WORD_LENGTH:string = 'minWordLength';
    static MAX_WORD_LENGTH:string = 'maxWordLength';
    static SENTENCE_DELIMITERS:string = 'sentenceDelimiters';

    /**
     * Returns 'KeywordsConfig.SENTENCE_DELIMITERS' parameter value.
     * @returns {string[]}
     */
    static getSentenceDelimiters():string[] {
        const delimiters = KeywordsConfig.get(KeywordsConfig.SENTENCE_DELIMITERS);
        return Array.isArray(delimiters) ? delimiters : ['.'];
    }

    /**
     * Configurations.
     * @type {ConfigDataType}
     * @private
     */
    __config:ConfigDataType = {
        minWordLength: 2,
        maxWordLength: 15,
        sentenceDelimiters: ['.', ';']
    };
}