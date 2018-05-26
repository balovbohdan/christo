type Config = {
    minWordLength:number,
    maxWordLength:number
};

/** Keywords configurations. */
export default class KeywordsConfig {
    /**
     * Returns configuration value.
     * @param {string} key
     * @returns {string|number}
     */
    static get(key:string):string { return this.__config[key] || ''; }

    static MIN_WORD_LENGTH:string = 'minWordLength';
    static MAX_WORD_LENGTH:string = 'maxWordLength';

    /**
     * Configurations.
     * @type {Config}
     * @private
     */
    static __config:Config = {
        minWordLength: 2,
        maxWordLength: 15
    };
}