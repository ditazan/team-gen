const Engineer = require("../lib/Engineer.js");

test("creates a Team Engineer", () => {
  const engineer = new Engineer(`d`,`d`,`d`,`d`);

  expect(engineer.name).toEqual(expect.any(String));
  expect(engineer.name.length).toBeGreaterThan(0);
  expect(engineer.email).toEqual(expect.any(String));
  expect(engineer.email.length).toBeGreaterThan(0);
  expect(engineer.github).toEqual(expect.any(String));
  expect(engineer.github.length).toBeGreaterThan(0);
  expect(engineer.id).toEqual(expect.any(String));
  expect(engineer.id.length).toBeGreaterThan(0);
  expect(engineer.role).toEqual(`Engineer`);
});
