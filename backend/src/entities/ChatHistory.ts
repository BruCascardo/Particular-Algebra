import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity()
export class ChatHistory {
  @PrimaryKey()
  id!: number;

  @Property()
  message!: string;
}
