const resolvers = {
  Query: {
    coupsDeCoeur: async (_parent, args, context, info) => {
      return context.dataSources.coupDeCoeursAPI.getAll();
    },
  },
  Mutation: {
    createCoupDeCoeur: async (_parent, args, context, _info) => {
      const result = await context.dataSources.coupDeCoeursAPI.createCoupDeCoeur(
        args
      );
      if (result) {
        return { coupDeCoeur: result, success: true };
      } else {
        return { success: false };
      }
    },
  },
};

module.exports = resolvers;
