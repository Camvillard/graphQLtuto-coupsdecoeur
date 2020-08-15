const { gql } = require("apollo-server");

const typeDefs = gql`
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

  type Query {
    coupsDeCoeur: [CoupDeCoeur]
    coupDeCoeur(id: ID): CoupDeCoeur
  }

  type Mutation {
    createCoupDeCoeur(content: String!, rating: Int): ActionResponse
  }
`;

module.exports = typeDefs;
