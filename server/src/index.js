const { ApolloServer } = require("apollo-server");
const CoupDeCoeursAPI = require("./datasources/coupsdecoeur");

const resolvers = require("./resolvers");
const typeDefs = require("./schema");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    coupDeCoeursAPI: new CoupDeCoeursAPI(),
  }),
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
