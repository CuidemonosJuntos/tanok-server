const { AuthenticationError } = require("apollo-server");

const authenticated = next => (root, args, ctx, info) => {
  if (!ctx.currentUser) {
    throw new AuthenticationError("You must be logged in");
  }
  return next(root, args, ctx, info);
};


user = {
  _id: "1",
  name: "paola",
  email: "paolagaray@gmail.com"
}

module.exports = {
    Query: {
      me: () => {return user}
    }
  }


  // Query: {
  //   me: authenticated((root, args, ctx) => ctx.currentUser),
  // }
