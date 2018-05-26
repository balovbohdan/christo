import DB from './DB';

/**
 * Works with keywords source.
 * Loads and parses data.
 */
export default DB.KeywordsData = class KeywordsData extends DB {
    /**
     * DB table name.
     * @type {string}
     * @protected
     */
    __tableName:string = 'KeywordsData';

    /**
     * Prepares dirty data got from DB to be saved locally.
     * Makes parsing of keywords file contents.
     * @param {string} dirtyData Keywords dirty data.
     * @returns {string[]}
     * @protected
     */
    __prepareDirtyData(dirtyData:string):string[] {
        try {
            return JSON.parse(dirtyData);
        } catch (e) {
            // TODO: Write error data to the log.
            console.error('Failed to parse keywords file.');
            return [];
        }
    }
};