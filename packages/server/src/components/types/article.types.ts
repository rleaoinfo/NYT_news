import pictureType from "./picture.types"

type Article = {
    title: string,
    url: string;
    abstract: string;
    publishedDate: string;
    picture: pictureType;
}


export default Article