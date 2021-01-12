import { ObjectType, Field } from 'type-graphql';

@ObjectType()
class pictureType {
    @Field()
    url: string;
    @Field()
    caption: string;
}

export default pictureType;
