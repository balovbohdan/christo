import FileLoader from '../FileLoader';
import DbConfig from "../DbConfig";

type DbDataType = {}|any[];

/** DB superclass. */
export default class DB {
    static KeywordsData = null;

    /**
     * Instantiates keywords file instance.
     * Loads keywords file and parses it.
     * @returns {Promise<DB>}
     */
    static instantiate():Promise<DB> {
        return new Promise((success) => {
            const instance = new this();

            return instance.__getFromDb()
                .then((contents) => {
                    instance.__setData(instance.__prepareDirtyData(contents));
                    return success(instance);
                });
        });
    }

    /**
     * Constructor.
     * @param {DbDataType} data Data got from DB.
     */
    constructor(data?:DbDataType) {
        this.__data = data || {};
    }

    /**
     * Returns all data got from DB.
     * @returns {DbDataType}
     */
    getAll():DbDataType { return this.__data; }

    /**
     * Prepares dirty data got from DB to be saved locally.
     * @param {string} dirtyData
     * @returns {DbDataType}
     * @protected
     */
    __prepareDirtyData(dirtyData:string):DbDataType { return {}; }

    /**
     * Gets data from the DB.
     * @returns {Promise<string>}
     * @protected
     */
    __getFromDb():Promise<string> {
        if (!this.__tableName) throw new Error('Got invalid DB table name.');
        return FileLoader.load(`${DbConfig.get('dbRoot')}${this.__tableName}.json`);
    }

    /**
     * Sets data.
     * @param {DbDataType} data
     * @returns {DB}
     * @protected
     */
    __setData(data:DbDataType):DB {
        this.__data = data;
        return this;
    }

    /**
     * Data gro from DB.
     * @type {DbDataType}
     * @protected
     */
    __data:DbDataType = null;

    /**
     * DB table name.
     * @type {string}
     * @protected
     */
    __tableName:string = null;
};