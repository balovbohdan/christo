import Christo from './Christo';
import KeywordsConfig from './KeywordsConfig';
import ArrayUtils from './ArrayUtils';
import Morphy from 'phpmorphy';

/**
 * Works with keywords.
 * Extracts keywords from sentence(s).
 */
export default class Keywords {
    /**
     * Returns base forms of keywords.
     * @param {string[]} keywords
     * @returns {*[]}
     */
    static getBaseForms(keywords:string[]) {
        if (!keywords.length) return [];
        const morphy:Morphy = Christo.getInst().getMorphy();

        return ArrayUtils
            .flatten(
                keywords
                    .map(morphy.getBaseForm.bind(morphy))
                    .filter(word => word)
            )
            .map(word => word.toLowerCase());
    }

    /**
     * Filters keywords.
     * Removes that ones that are forbidden.
     * @param {string[]} keywords
     * @returns {string[]}
     */
    static filter(keywords:string[]):string[] {
        return keywords.filter(keyword => {
            const len:number = keyword.length;
            const minLen:number = +KeywordsConfig.get(KeywordsConfig.MIN_WORD_LENGTH) || 0;
            const maxLen:number = +KeywordsConfig.get(KeywordsConfig.MAX_WORD_LENGTH) || 0;

            return keyword && len >= minLen && len <= maxLen;
        });
    }
}