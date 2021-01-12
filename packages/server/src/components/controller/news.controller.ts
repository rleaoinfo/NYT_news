import { format } from 'date-fns'
import GetTopNews from '../../utils/apiconnection'
import Article from '../types/article.types'


class TopNewsController {
    async news(section: string) {
        const response = await GetTopNews(section);

        if (!response) {
            return [];
        }
        
        const allTopNews: Article[] = response?.data?.results.map((news: any) => {
            const filterNews: Article = {
                title: news.title,
                url: news.url,
                abstract: news.abstract,
                publishedDate: format(new Date(news.created_date),'dd/MM/yyyy'),
                picture: { url: news.multimedia[0].url, caption: news.multimedia[0].caption }
            }
            return filterNews
        });

        return allTopNews;
    }
}

export default TopNewsController