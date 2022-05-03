const { ApolloServer } = require("apollo-server");

// 1 the variable typeDefs defines our graphQL schema, defining a simple Query
// type with a field called info, a required string. It can't be null because of the !
const typeDefs = `
    type Query {
        info: String!
        feed: [Link!]!
    }

    type Link {
        id: ID!
        description: String!
        url: String!
    }
`;

// 2 the variable resolvers is the actual implementation of our schema
let links = [
  {
    id: "link-0",
    url: "www.howtographql.com",
    description: "Fullstack tutorial for GraphQL",
  },
];

const resolvers = {
  Query: {
    info: () => `This is the API of a Hackernews Clone`,
    // 2
    feed: () => links,
  },
  // 3
  Link: {
    id: (parent) => parent.id,
    description: (parent) => parent.description,
    url: (parent) => parent.url,
  },
};

// 3 the schema and resolvers are passed to ApolloServer to tell the server
// what API operations are accepted
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => console.log(`Server is running on ${url}`));
