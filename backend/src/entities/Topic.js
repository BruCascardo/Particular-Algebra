import { Entity, PrimaryKey, Property } from '@mikro-orm/core';
@Entity()
export class Topic {
    @PrimaryKey()
    id;
    @Property()
    name;
}
//# sourceMappingURL=Topic.js.map