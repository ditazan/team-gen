function Manager(name= "", email= "", github= "", id= "", office= "") {
  this.name = name;
  this.email = email;
  this.id = id;
  this.office = office;
  this.role = `Manager`;
}

module.exports = Manager;
