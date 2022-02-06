const Engineer = require("../lib/Engineer.js");

test("creates a Team Engineer", () => {
  const manager = new Engineer();

  expect(engineer.name).toEqual(expect.any(String));
  expect(engineer.name.length).toBeGreaterThan(0);
  expect(engineer.email).toEqual(expect.any(String));
  expect(engineer.email.length).toBeGreaterThan(0);
  expect(engineer.id).toEqual(expect.any(String));
  expect(engineer.id.length).toBeGreaterThan(0);
  expect(engineer.office).toEqual(expect.any(String));
  expect(engineer.office.length).toBeGreaterThan(0);
  expect(engineer.role).toEqual(`Engineer`);
});
