import { Resolver, Query, Arg } from 'type-graphql';
import TopNewsController from '../../components/controller/news.controller';
import Article from '../types/article.types';

@Resolver(Article)
class TopNewsResolver{
    TopNewsController: any;

    constructor () {
        this.TopNewsController = new TopNewsController();
    }

    @Query(() => [Article])
    async topNews(@Arg('typeNews') typeNews: string) {
        return await this.TopNewsController.news(typeNews);
    }
}

export default TopNewsResolver;