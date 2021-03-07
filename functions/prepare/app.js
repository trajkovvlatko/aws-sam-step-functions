exports.lambdaHandler = async (event, context) => {
  return {
    from: "SEK",
    to: "EUR",
    amount: 100,
  };
};
