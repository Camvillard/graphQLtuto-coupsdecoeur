export const resolvers = {
  Query: {
    coupsDeCoeur: async (_parent: any, args: any, context: any, info: any) => {
      return context.dataSources.coupDeCoeursAPI.getAll();
    },
  },
  Mutation: {
    createCoupDeCoeur: async (
      _parent: any,
      args: any,
      context: any,
      _info: any
    ) => {
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
