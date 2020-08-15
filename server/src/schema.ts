const { gql } = require("apollo-server");

export const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  type CoupDeCoeur {
    id: ID!
    content: String!
    rating: Int
    createdAt: String!
  }

  type ActionResponse {
    coupDeCoeur: CoupDeCoeur
    success: Boolean!
  }

  # lists all the query types available
  type Query {
    coupsDeCoeur: [CoupDeCoeur]
  }

  type Mutation {
    createCoupDeCoeur(content: String!, rating: Int): ActionResponse
  }
`;
