const Manager = require("../lib/Manager.js");

test("creates a Team Manager", () => {
  const manager = new Manager(`d`,`d`,`d`,`d`);

  expect(manager.name).toEqual(expect.any(String));
  expect(manager.name.length).toBeGreaterThan(0);
  expect(manager.email).toEqual(expect.any(String));
  expect(manager.email.length).toBeGreaterThan(0);
  expect(manager.id).toEqual(expect.any(String));
  expect(manager.id.length).toBeGreaterThan(0);
  expect(manager.office).toEqual(expect.any(String));
  expect(manager.office.length).toBeGreaterThan(0);
  expect(manager.role).toEqual(`Manager`);
});
