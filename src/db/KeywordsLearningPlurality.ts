import DB from './DB';

type DbDataType = Array<{id:string, sentences:string[]}>;

/**
 * Learning plurality model class.
 * Loads learning plurality data.
 */
export default class KeywordsLearningPlurality extends DB {
    /**
     * Returns all data got from DB.
     * @returns {DbDataType}
     */
    getAll():DbDataType { return Array.isArray(this.__data) ? this.__data : []; }

    /**
     * DB table name.
     * @type {string}
     * @protected
     */
    __tableName = 'KeywordsLearningPlurality';

    /**
     * Prepares dirty data got from DB to be saved locally.
     * @param {string} dirtyData
     * @returns {DbDataType}
     * @protected
     */
    __prepareDirtyData(dirtyData:string):Array<{}> {
        try {
            return JSON.parse(dirtyData);
        } catch (e) {
            // TODO: Write error data to loe log.
            return [];
        }
    }
};