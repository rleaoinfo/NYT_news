import pictureType from "./picture.type"

type Article = {
    title: string,
    url: string;
    abstract: string;
    publishedDate: string;
    picture: pictureType;
}


export default Article