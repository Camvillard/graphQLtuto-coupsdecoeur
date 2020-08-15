const resolvers = {
  Query: {
    coupsDeCoeur: async (_parent, _args, context, _info) => {
      return context.dataSources.coupDeCoeursAPI.getAll();
    },
    coupDeCoeur: async (_parent, args, context, _info) => {
      return context.dataSources.coupDeCoeursAPI.getById(args.id);
    },
    allFavorites: async (_parent, _args, context, _info) => {
      return context.dataSources.coupDeCoeursAPI.getAllFavorites();
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
    // addToFavorites: async (_parent, args, context, _info) => {
    //   const result = await context.dataSources.coupDeCoeursAPI.addToFavorites(
    //     args.id
    //   );
    //   if (result) {
    //     return { coupDeCoeur: result, success: true };
    //   } else {
    //     return { success: false };
    //   }
    // },
  },
};

module.exports = resolvers;

// parent : field's parent - resolver for a parent field is always executed before the resolvers for that field's children
// args : object contains all graphQL arguments provided
// context object shared accross all the resolvers
// info : info about execution state of the operation
