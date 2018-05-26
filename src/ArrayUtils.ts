/** Array utilities.*/
export default class ArrayUtils {
    /**
     * Filters array. Removes duplicates.
     * @param {*[]} arr
     * @returns {*[]}
     */
    static getUnique(arr:any[]):any[] { return arr.filter((item, i) => arr.indexOf(item) === i); }

    /**
     * Makes flattening of array.
     * @param {*[]} arr
     * @returns {*[]}
     */
    static flatten(arr:any[]):any[] { return [].concat(...arr); }
}