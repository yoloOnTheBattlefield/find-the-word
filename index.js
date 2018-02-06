const stepsToTarget = require("./src/app");
const dictionary = ["hit", "dot", "dog", "cog", "hot", "log"];

stepsToTarget("hit", "cog", dictionary);

module.exports = { dictionary };
