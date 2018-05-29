import KeywordsLearningPlurality from './db/KeywordsLearningPlurality';

/**
 * Teacher of the 'Christo'.
 * Uses learning plurality stored in the DB.
 */
export default class Teacher {
    /**
     * Constructor.
     * @param {{}} [params]
     */
    constructor(params?:{}) {
        this.__params = params || {};
    }

    /**
     * Makes teaching.
     * @returns {Promise<Teacher>}
     */
    static teach() { return (new Teacher()).start(); }

    /**
     * Starts teaching process.
     * @returns {Promise<Teacher>}
     */
    start() {
        return this.__loadLearningPlurality()
            .then(() => {
                this.__doStart();
                return this;
            });
    }

    /**
     * Parameters.
     * @type {{}}
     * @private
     */
    __params:{} = {};

    /**
     * Learning plurality for teaching.
     * @type {null|KeywordsLearningPlurality}
     * @private
     */
    __learningPlurality:null|KeywordsLearningPlurality = null;

    /**
     * Loads learning plurality from the DB.
     * Saves learning plurality locally.
     * @returns {Promise<KeywordsLearningPlurality>}
     * @private
     */
    __loadLearningPlurality() {
        return KeywordsLearningPlurality.instantiate()
            .then(keywordsLearningPlurality => {
                if (keywordsLearningPlurality instanceof KeywordsLearningPlurality)
                    return this.__learningPlurality = keywordsLearningPlurality;
                else
                    return this.__learningPlurality = null;
            });
    }

    /**
     * Starts teaching process.
     * Goes through the learning plurality and looks for keywords.
     * @private
     * @throws {Error}
     */
    __doStart() {
        if (!this.__learningPlurality) throw new Error('There is no loaded learning plurality.');

    }
};