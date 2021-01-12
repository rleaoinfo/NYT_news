import { ObjectType, Field } from 'type-graphql';
import pictureType from './picturetypes.types';


@ObjectType()
class Article {
    @Field()
    title: string;
    @Field()
    url: string;
    @Field()
    abstract: string;
    @Field()
    publishedDate: string;
    @Field(type => pictureType)
    picture: pictureType

}


export default Article;
