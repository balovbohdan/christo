import Keywords from './Keywords';
import KeywordsExtractor from './KeywordsExtractor';
import Morphy from 'phpmorphy';
import KeywordsData from "./db/KeywordsData";
import Teacher from './Teacher';

type Params = {
    langCode?:string
};

/**
 * Main class.
 * Think about it as mediator that controls everything in the program.
 */
export default class Christo {
    /**
     * Constructor.
     * @param {Params} [params] Parameters.
     * @param {string} [params.langCode = 'en'] Language code.
     */
    constructor(params?:Params) {
        if (Christo.__inst instanceof Christo) return Christo.__inst;
        Christo.__inst = this;

        this.__params = { ...Christo.__getDefParams(), ...(params || {}) };
    }

    /**
     * Starts 'Christo' application.
     * @param {Params} [params]
     */
    static start(params?:Params) {
        Christo.getInst(params);

        // const keywords = KeywordsExtractor.extract('почему   не    пускает в   дз.   почему пропал доступ к дз; заебали уже все');
        // console.log(keywords);

        // KeywordsData.instantiate()
        //     .then(keywordsFile => {
        //         console.log(keywordsFile.getAll());
        //     })
        //     .catch((e) => console.log.bind(console, `Failed to start 'Christo'.`, e));

        Teacher.teach();
    }

    /**
     * Returns single instance of the class.
     * @param {Params} params
     * @returns {Christo}
     */
    static getInst(params?:Params) { return new Christo(params); }

    /**
     * Returns default 'PhpMorphy' instance.
     * @returns {}
     */
    getMorphy():Morphy {
        if (!this.__morphy) this.__morphy = new Morphy(this.__params.langCode, Christo.__getMorphyParams());
        return this.__morphy;
    }

    /**
     * Parameters.
     * @type {Params}
     * @private
     */
    __params:Params = null;

    /**
     * 'PhpMorphy' instance.
     * @type {Morphy}
     * @private
     */
    __morphy:Morphy = null;

    /**
     * Single instance of the class.
     * @type {null|Christo}
     * @private
     */
    static __inst:Christo = null;

    /**
     * Returns default parameters.
     * @returns {Params}
     * @private
     */
    static __getDefParams():Params {
        return {
            langCode: 'en'
        };
    }

    /**
     * Returns parameters for the default 'PhpMorphy' instance.
     * @returns {{}}
     * @private
     */
    static __getMorphyParams():{} { return {}; }
}