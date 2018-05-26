type ConfigDataType = {};

interface ConfigClassType {
    new (): Config;
}

export type ConfigValueType = string|number|string[];

/** Main configuration class. */
export default class Config {
    /**
     * Returns configuration value.
     * @param {string} key
     * @returns {ConfigValueType}
     */
    get(key:string):ConfigValueType { return this.__config[key] || ''; }

    /**
     * Returns configuration value.
     * @param {string} key
     * @param {ConfigClassType} [ConfigClass] Aim configuration class to extract value from.
     * @returns {ConfigValueType}
     */
    static get(key:string, ConfigClass?:ConfigClassType):ConfigValueType {
        // const AimConfigClass = ConfigClass || Config;
        // console.log(this);
        return (new this()).get(key);
    }

    /**
     * Configurations.
     * @type {ConfigDataType}
     * @private
     */
    __config:ConfigDataType = {};
};