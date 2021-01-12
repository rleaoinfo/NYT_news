import gql from "graphql-tag"

export const TOPNEWS = gql`
    query TopNews($type: String!) {
        topNews(typeNews: $type) {
            title
            url
            abstract
            publishedDate
            picture {
                caption
                url
            }
        }
    }
`;

