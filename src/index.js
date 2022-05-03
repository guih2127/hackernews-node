const { ApolloServer } = require("apollo-server");

// 1 the variable typeDefs defines our graphQL schema, defining a simple Query
// type with a field called info, a required string. It can't be null because of the !
const typeDefs = `
  type Query {
    info: String!
  }
`;

// 2 the variable resolvers is the actual implementation of our schema
const resolvers = {
  Query: {
    info: () => `This is the API of a Hackernews Clone`,
  },
};

// 3 the schema and resolvers are passed to ApolloServer to tell the server
// what API operations are accepted
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => console.log(`Server is running on ${url}`));
