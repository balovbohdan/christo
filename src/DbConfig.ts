import Config from './Config';

type ConfigDataType = {
    dbRoot:string
};

/** DB configurations. */
export default class DbConfig extends Config {
    /**
     * Configurations.
     * @type {ConfigDataType}
     * @private
     */
    __config:ConfigDataType = {
        dbRoot: `${__dirname}/../db/`
    };
};