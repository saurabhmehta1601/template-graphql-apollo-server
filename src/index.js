require("dotenv").config()
require("./config/connectDb")()

const { ApolloServer } = require("apollo-server");

const typeDefs = require("./schema");
const QueryResolver = require("./resolvers/Query");
const MutationResolver = require("./resolvers/Mutation");

const server = new ApolloServer({
  typeDefs,
  resolvers : {
    Query : QueryResolver,
    Mutation : MutationResolver
  }
});

server.listen().then(({ url }) => {
  console.log("> Apollo server running at " + url);
});
