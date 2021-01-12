import React, { useState } from 'react'
import ArticlesListStyles, { ArticleStyles, PictureStyles, TitleStyles, ContentStyles, DateStyles, ChevronButtonStyles, ContainerStyles } from './styles'
import { ReactComponent as ChevronRight } from "../../img/chevron-right.svg"
import TopNewsModal from "../topNewsModal"
import Article from '../../types/article.type';

type TopNewsListType = {
    articles: Article[]
}

const TopNewsList = ({ articles = [] }: TopNewsListType) => {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState({
        title: '',
        url: '',
        abstract: '',
        publishedDate: '',
        picture: {
            url: '',
            caption: '',
        }
    });

    const getArticle = (a) => {
        setSelected(a);
        setOpen(true);
    }


    return (
        <ContainerStyles>
            <ArticlesListStyles>
                {articles && articles.map((article) => (
                    <ArticleStyles>
                        <PictureStyles src={article.picture.url} alt={article.picture.caption} />
                        <ContentStyles>
                            <TitleStyles>{article.title}</TitleStyles>
                            <DateStyles>{article.publishedDate}</DateStyles>
                        </ContentStyles>
                        <ChevronButtonStyles onClick={() => getArticle(article)} >
                            <ChevronRight />
                        </ChevronButtonStyles>
                    </ArticleStyles>
                ))}
                {selected && <TopNewsModal article={selected} isOpen={open} closeModal={() => setOpen(false)} />}
            </ArticlesListStyles>
        </ContainerStyles>
    );


}

export default TopNewsList;
