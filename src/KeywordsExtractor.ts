import Keywords from "./Keywords";
import ArrayUtils from "./ArrayUtils";
import KeywordsConfig from './KeywordsConfig';

/** Extracts keywords from 'dirty' strings. */
export default class KeywordsExtractor {
    /**
     * Extracts keywords from dirty text.
     * Groups keywords by sentences.
     * @param {string} text
     * @returns {Array<Array<string>>}
     */
    static extract(text:string):Array<Array<string>> {
        return KeywordsExtractor.extractFromSentences(
            KeywordsExtractor.extractSentences(text)
        );
    }

    /**
     * Extracts sentences from dirty text.
     * @param {string} text
     * @returns {string[]}
     */
    static extractSentences(text:string):string[] {
        let sentences = [text];

        KeywordsConfig.getSentenceDelimiters().forEach(delimiter => {
            sentences = ArrayUtils.flatten(sentences.map(sentence => sentence.split(delimiter)));
        });

        return sentences;
    }

    /**
     * Extracts keywords from some sentence.
     * P.S. Every string will be considered as sentence.
     * @param {string} sentence
     * @returns {string[]} Unique keywords.
     */
    static extractFromSentence(sentence:string):string[] {
        return Keywords.filter(
            ArrayUtils.getUnique(
                Keywords.getBaseForms(
                    sentence
                        .replace(/[^a-zа-я1-9\s]+/ig, '')
                        .match(/(\b\w+\b)|[а-я]+/ig)
                )
            )
        );
    }

    /**
     * Extracts keywords from sentences.
     * @param {string[]} sentences
     * @returns {Array<Array<string>>}
     */
    static extractFromSentences(sentences:string[]):Array<Array<string>> {
        return sentences.map(sentence => KeywordsExtractor.extractFromSentence(sentence));
    }

    /**
     * Extracts keywords from sentences.
     * Makes plain keywords array.
     * @param {string[]} sentences
     * @returns {string[]}
     */
    static extractFromSentencesPlain(sentences:string[]):string[] {
        return ArrayUtils.getUnique(
            ArrayUtils.flatten(
                KeywordsExtractor.extractFromSentences(sentences)
            )
        );
    }
};