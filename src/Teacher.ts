import KeywordsLearningPlurality from './db/KeywordsLearningPlurality';

/**
 * Teacher of the 'Christo'.
 * Loads huge learning plurality and makes teaching.
 */
export default class Teacher {
    static teach() {
        return KeywordsLearningPlurality.instantiate()
            .then(keywordsLearningPlurality => {
                console.log(keywordsLearningPlurality);
            });
    }
};