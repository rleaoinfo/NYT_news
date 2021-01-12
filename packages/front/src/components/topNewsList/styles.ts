import styled from "styled-components"

const ArticlesListStyles = styled.div`
    padding: 25px;
`

export const ArticleStyles = styled.div`
    background-color : white;
    margin-bottom: 20px;
    border-radius: 3px;
    display:flex;
    align-items:center;
    padding-right: 25px;
`

export const PictureStyles = styled.img`
    height: 100px; 
    width: 100px;
    border-bottom-left-radius: 3px;
    border-top-left-radius: 3px;
    object-fit: cover;
`
export const TitleStyles = styled.h2`
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    margin-bottom: 10px;
    font-weight: 600;
    color: #333333;
`

export const ContentStyles = styled.div`
    padding: 10px 25px;
    width: 100%;
`

export const DateStyles = styled.p`
    font-family: 'Montserrat', sans-serif;
    font-size: 12px;
    color: #b1b1b1;
    letter-spacing: 0.8px;
`
export const ChevronButtonStyles = styled.button`
    border: none;
    background-color: #3fd79a;
    color: white;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    cursor: pointer;
    transition: all ease .3s;
    &:hover {
        background-color: #4a4fea;
    }
    
`
export const ContainerStyles = styled.div`
    width: 1280px;
    max-width: 100%;
    margin: 0 auto;
`

export default ArticlesListStyles