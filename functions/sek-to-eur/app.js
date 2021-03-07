const crypto = require("crypto");

exports.lambdaHandler = async (event, context) => {
  return {
    id: crypto.randomBytes(16).toString("hex"),
    from: event["from"],
    to: event["to"],
    amount: event["amount"].toString(),
    result: (event["amount"] * 0.9).toString(),
    timestamp: new Date().toISOString(),
  };
};
