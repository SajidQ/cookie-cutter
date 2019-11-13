import 'dotenv/config';
import express from 'express'
import bodyParser from "body-parser"
import db from './queries'
import { ApolloServer, gql } from 'apollo-server-express'
import { makeExecutableSchema } from 'graphql-tools'


const books = [
  {
    title: "Harry Potter and the Sorcerer's stone",
    author: 'J.K. Rowling',
  },
  {
    title: 'Jurassic Park',
    author: 'Michael Crichton',
  },
];

const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Book {
    title: String
    author: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    books: [Book]
  }
`;

// The resolvers
const resolvers = {
  Query: { books: () => books },
};

// Put together a schema
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

// Initialize the app
const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: {
  settings: {
    'editor.theme': 'dark',
  },
},
});

server.applyMiddleware({ app });

app.listen({port: process.env.PORT}, () => {
  console.log(`App running on port http://localhost:${process.env.PORT}${server.graphqlPath}.`)
})
