const { ApolloServer } = require("apollo-server");
const { CoupDeCoeursAPI } = require("./datasources/coupsdecoeur");

import { resolvers } from "./resolvers";
import { typeDefs } from "./schema";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    coupDeCoeursAPI: new CoupDeCoeursAPI(),
  }),
});

// The `listen` method launches a web server.
server.listen().then(({ url }: { url: string }) => {
  console.log(`🚀  Server ready at ${url}`);
});
