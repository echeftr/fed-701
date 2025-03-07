//Bestand functions.test.js:
const functions = require("./functions.js");

test("Should be null", () => {
  // Begin met expect()
  // Binnen de eerste haken zet je hetgeen je wilt testen. Dat zal een functie zijn.
  // Daarna volgt je .toBeSomethingSomething functie,
  // zoek de geschikte functie in de documentatie.
  // In dit geval willen we checken of de functie "isNull()" ook daadwerkelijk
  // Null returned. Dus "toBeNull()" makes the most sense.
  expect(functions.isNull()).toBeNull();
});

test("checkValue Should be falsy when argument is undefined", () => {});

test("User should be Brad Traversy object", () => {});

// Tests zijn eigenlijk gewoon functies. Om dat te laten zien laten we je
// nu tests maken die werken zonder input van buitenaf:

// Less than or greater than
test("Should be under or equal to 1600", () => {
  const load1 = 800;
  const load2 = 800;
  // expect(load1 + load2).toBe.....
  expect(load1 + load2).toBeLessThanOrEqual(1600);
});

// Regex
test("There is no I in team", () => {
  //  expect('team').not.to..........;
  expect("team").not.toMatch(/I/i);
});

// Arrays
test("Admin should be in usernames", () => {
  usernames = ["john", "karen", "admin"];
  // expect(usernames).to......
  expect(usernames).toContain("admin");
});
