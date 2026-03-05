import type { Options } from '@mikro-orm/core';
import { SqliteDriver } from '@mikro-orm/sqlite';
import { ChatHistory } from '../entities/ChatHistory.js';
import { Topic } from '../entities/Topic.js';

// Archivos de configuración de MikroORM
const config: Options = {
  driver: SqliteDriver,
  dbName: 'chat.sqlite',
  entities: [ChatHistory, Topic],
  debug: true,
};

export default config;
