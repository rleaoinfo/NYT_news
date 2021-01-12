import React from 'react'
import OutDivStyles, { ModalStyles, ImgStyles, ButtonStyles, ContentStyles, TitleStyles, DateStyles, AbstractStyles } from './styles'
import { ReactComponent as X } from "../../img/x.svg"
import Article from "../../types/article.type"

type TopNewsModalType = {
    article: Article,
    isOpen?: boolean,
    closeModal?: any
}

const TopNewsModal = ({ article, isOpen = false, closeModal }: TopNewsModalType) => {
    return (
        <OutDivStyles isOpen={isOpen}>
            <ModalStyles>
                <ButtonStyles onClick={closeModal}><X /></ButtonStyles>
                <ImgStyles src={article.picture.url} alt={article.picture.caption} />
                <ContentStyles>
                    <TitleStyles href={article.url} target="_blank">{article.title}</TitleStyles>
                    <AbstractStyles>{article.abstract}</AbstractStyles>
                    <DateStyles>{article.publishedDate}</DateStyles>
                </ContentStyles>
            </ModalStyles>
        </OutDivStyles>
    );


}

export default TopNewsModal;