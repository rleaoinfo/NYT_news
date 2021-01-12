import { createHttpLink  } from "apollo-link-http"
import {
    ApolloLink,
    ApolloClient,
    InMemoryCache,
    NormalizedCacheObject,
} from '@apollo/client'

const httpLink = createHttpLink({ uri: "http://localhost:4100" })
const client = new ApolloClient<NormalizedCacheObject>({ link: (httpLink as unknown) as ApolloLink, cache: new InMemoryCache() })

export default client