import KeywordsLearningPlurality from "./db/KeywordsLearningPlurality";

/**
 * Generates keywords using huge learning plurality.
 * It is recommended ot use really big learning plurality.
 * This will help to get good learning results.
 */
export default class KeywordsGenerator {
    /**
     * Learning plurality.
     * @type {null|KeywordsLearningPlurality}
     * @private
     */
    __learningPlurality:null|KeywordsLearningPlurality = null;

    /**
     * Constructor.
     * @param {KeywordsLearningPlurality} learningPlurality
     * @throws {Error}
     */
    construct(learningPlurality:KeywordsLearningPlurality) {
        this.__learningPlurality = KeywordsGenerator.__validateLearningPlurality(learningPlurality);
    }

    static generate(learningPlurality:KeywordsLearningPlurality) {
        // plurality.forEach((item) => {
        //     item.sentences.forEach((sentence) => {
        //         console.log(sentence);
        //     });
        // });
    }

    /**
     * Validates learning plurality.
     * @param {KeywordsLearningPlurality} learningPlurality
     * @returns {KeywordsLearningPlurality} Valid learning plurality.
     * @private
     * @throws {Error}
     */
    static __validateLearningPlurality(learningPlurality:KeywordsLearningPlurality) {
        const plurality = learningPlurality.getAll();
        if (!plurality || !plurality.length) throw new Error('Go empty learning plurality.');
        return learningPlurality;
    }
};