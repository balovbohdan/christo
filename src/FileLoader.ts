import * as fs from 'fs';

/** Loads files. */
export default class FileLoader {
    /**
     * Loads file contents.
     * @param {string} src
     * @returns {Promise<string>} File contents.
     */
    static load(src:string):Promise<string> {
        return new Promise((success, error) => {
            return fs.readFile(src, (errorObject, contents) => {
                if (errorObject) return error(errorObject);
                return success(contents.toString());
            });
        });
    }
};