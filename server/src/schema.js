const { gql } = require("apollo-server");

const typeDefs = gql`
  type CoupDeCoeur {
    id: ID!
    content: String!
    rating: Int
    createdAt: String!
    isFavorite: Boolean
  }

  type ActionResponse {
    coupDeCoeur: CoupDeCoeur
    success: Boolean!
  }

  type Query {
    coupsDeCoeur: [CoupDeCoeur]
    coupDeCoeur(id: ID): CoupDeCoeur
    allFavorites: [CoupDeCoeur]
  }

  type Mutation {
    createCoupDeCoeur(content: String!, rating: Int): ActionResponse
    addToFavorites(id: ID!): ActionResponse
  }
`;

module.exports = typeDefs;
