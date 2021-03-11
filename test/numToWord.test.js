const {numToWord} = require("../js/app");

test("Output should be english litterals", () => {

  expect(numToWord("1")).toBe(" one");

});

test("Output should be english litterals", () => {

  expect(numToWord("125")).toBe(" one hundred twenty five");

});

test("Output should be english litterals", () => {

  expect(numToWord("125")).toBe(" one hundred twenty five");

});

test("Output should be english litterals", () => {

  expect(numToWord("999")).toBe(" nine hundred ninety nine");

});


