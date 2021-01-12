require("dotenv").config();

import "reflect-metadata";

import { buildSchema } from 'type-graphql';
import { ApolloServer } from 'apollo-server';

import  topNewsResolver  from './graphql/resolvers/index';

const bootstrap = async () => {
    const schema = await buildSchema({
        resolvers: [ topNewsResolver ],
    }); 

    const server = new ApolloServer({ schema });
    server.listen({ port: 4100 }, () => console.log("Running"));
}

bootstrap();
