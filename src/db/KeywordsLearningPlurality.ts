import DB from './DB';

/**
 * Learning plurality model class.
 * Loads learning plurality data.
 */
export default class KeywordsLearningPlurality extends DB {
    /**
     * DB table name.
     * @type {string}
     * @protected
     */
    __tableName = 'KeywordsLearningPlurality';

    /**
     * Prepares dirty data got from DB to be saved locally.
     * @param {string} dirtyData
     * @returns {Array<{}>}
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