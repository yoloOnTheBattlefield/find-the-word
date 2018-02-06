const { expect } = require("chai");
const { Node, differentByOne } = require("./src/utils");
const stepsToTarget = require("./src/app");
const { dictionary } = require("./index");

describe("node", () => {
  const newNode = new Node("hit", 1);
  it("creates a new node", () => {
    expect(newNode).to.be.an.instanceof(Node);
    expect(newNode).to.be.an("object");
    expect(newNode).to.deep.equal({ str: "hit", step: 1 });
  });
});

describe("differentByOne", () => {
  it('returns true for "hit" and "hot"', () => {
    const itPasses = differentByOne("hit", "hot");
    expect(itPasses).to.equal(true);
  });
  it('returns false for "hit" and "cog"', () => {
    const itFails = differentByOne("hit", "cog");
    expect(itFails).to.equal(false);
  });
  it("returns false if the words are equal", () => {
    const itFails = differentByOne("hit", "hit");
    expect(itFails).to.equal(false);
  });
  it("returns false if the words have different lengths", () => {
    const differentLength = differentByOne("hi", "node");
    expect(differentLength).to.equal(false);
  });
});

describe("stepsToTarget", () => {
  it("finds the word in 4 steps", () => {
    const testLength = stepsToTarget("hit", "cog", dictionary);
    expect(testLength).to.equal(4);
  });
  it("finds the word in 1 step", () => {
    const testLength2 = stepsToTarget("hit", "hot", dictionary);
    expect(testLength2).to.equal(1);
  });
  it("returns 0 if the word is not found", () => {
    const notFound = stepsToTarget("hit", "pip", dictionary);
    expect(notFound).to.equal(0);
  });

  it("returns 0 if no words have been provided in the dictionary", () => {
    const noWords = stepsToTarget("hit", "pip", []);
    expect(noWords).to.equal(0);
  });

  it("returns undefined if no dictionary has been provided", () => {
    const noDictionary = stepsToTarget("hit", "pip");
    expect(noDictionary).to.equal(undefined);
  });
});
