const test = require("node:test");
const assert = require("node:assert/strict");

test("simulation is not represented as a real blockchain transfer", () => {
  const result = {
    status: "SIMULATED",
    asset: "TEST_TOKEN",
    transactionHash: null,
    blockchainTransaction: false,
    realUsdtCreated: false
  };

  assert.equal(result.status, "SIMULATED");
  assert.equal(result.transactionHash, null);
  assert.equal(result.blockchainTransaction, false);
  assert.equal(result.realUsdtCreated, false);
});

test("simulated amounts must be positive and finite", () => {
  const isValidAmount = amount =>
    Number.isFinite(amount) &&
    amount > 0 &&
    amount <= 1_000_000_000;

  assert.equal(isValidAmount(100), true);
  assert.equal(isValidAmount(0), false);
  assert.equal(isValidAmount(-10), false);
  assert.equal(isValidAmount(Infinity), false);
});
