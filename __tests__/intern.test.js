const Intern = require("../lib/Intern.js");

test("creates a Team Intern", () => {
  const intern = new Intern(`d`,`d`,`d`,`d`);

  expect(intern.name).toEqual(expect.any(String));
  expect(intern.name.length).toBeGreaterThan(0);
  expect(intern.email).toEqual(expect.any(String));
  expect(intern.email.length).toBeGreaterThan(0);
  expect(intern.id).toEqual(expect.any(String));
  expect(intern.id.length).toBeGreaterThan(0);
  expect(intern.role).toEqual(`Intern`);
});
