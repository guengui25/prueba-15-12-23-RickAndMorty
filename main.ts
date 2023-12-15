import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { GraphQLError } from "graphql";

import { Query } from "./resolvers/query.ts"

import { Character } from "./resolvers/character.ts"
import { Episode } from "./resolvers/episode.ts";

import { typeDefs } from "./gql/schema.ts";

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Character,
    Episode
  }
});

const { url } = await startStandaloneServer(server);
console.info(`🚀 Server ready at ${url}`);