const { ApolloServer } = require("apollo-server");

const typeDefs = require("./schema");
const QueryResolver = require("./resolvers/Query");

const server = new ApolloServer({
  typeDefs,
  resolvers : {
    Query : QueryResolver
  }
});

server.listen().then(({ url }) => {
  console.log("> Apollo server running at " + url);
});
