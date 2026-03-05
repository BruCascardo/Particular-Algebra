import { Entity, PrimaryKey, Property } from '@mikro-orm/core';
@Entity()
export class ChatHistory {
    @PrimaryKey()
    id;
    @Property()
    message;
}
//# sourceMappingURL=ChatHistory.js.map