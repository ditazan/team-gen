const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, email,id,office) {
    super(name, email, id);
    this.office = office;
    this.role = `Project Manager`;
  }
}

module.exports = Manager;
