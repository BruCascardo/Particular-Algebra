import { Options } from '@mikro-orm/core';
import { SqliteDriver } from '@mikro-orm/sqlite';
import { ChatHistory } from '../entities/ChatHistory';
import { Topic } from '../entities/Topic';
// Archivos de configuración de MikroORM
const config = {
    driver: SqliteDriver,
    dbName: 'chat.sqlite',
    entities: [ChatHistory, Topic],
    debug: true,
};
export default config;
//# sourceMappingURL=mikro-orm.config.js.map