const stepsToTarget = require("./src/app");
const dictionary = ["hit", "dot", "dog", "cog", "hot", "log"];

console.log(`${stepsToTarget("hit", "cog", dictionary)} steps`);

module.exports = { dictionary };
