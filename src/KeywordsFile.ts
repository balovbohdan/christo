import FileLoader from './FileLoader';

type Params = {
    src:string
};

/**
 * Works with keywords file.
 * Makes parsing of the keywords file.
 */
export default class KeywordsFile {
    /**
     * Instantiates keywords file instance.
     * Loads keywords file and parses it.
     * @param {Params} params
     * @returns {Promise<KeywordsFile>}
     */
    static load(params:Params):Promise<KeywordsFile> {
        return FileLoader.load(params.src)
            .then((contents) => { return new KeywordsFile(KeywordsFile.__parse(contents)); });
    }

    /**
     * Constructor.
     * @param {{}[]} contents Keywords file parsed contents.
     */
    constructor(contents:{}[]) {
        this.__contents = contents;
    }

    /**
     * Keywords file parsed contents.
     * @type {{}[]}
     * @private
     */
    __contents = null;

    /**
     * Makes parsing of keywords file contents.
     * @param {string} contents Keywords file contents.
     * @returns {{}[]}
     * @private
     */
    static __parse(contents:string) {
        try {
            return JSON.parse(contents);
        } catch (e) {
            // TODO: Write error data to the log.
            console.error('Failed to parse keywords file.');
            return [];
        }
    }
};