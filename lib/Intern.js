function Intern(name = "", email = "", github = "", id = "", school) {
  this.name = name;
  this.email = email;
  this.github = github;
  this.id = id;
  this.school = school;
  this.role = `Intern`;
}

module.exports = Intern;
