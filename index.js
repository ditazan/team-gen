const inquirer = require("inquirer");
const generatePage = require("./src/template");
const { writeFile, copyFile } = require("./src/generate-site");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const promptPM = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: `name`,
        message: `Enter the Project Manager's name (Required)`,
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log(`Please enter PM's name !`);
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: `Enter the Project Manager's email (Required)`,
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log(`Please enter PM's email !`);
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: `Enter Project Manager's ID (Required)`,
        validate: (idInput) => {
          if (idInput) {
            return true;
          } else {
            console.log(`Please enter PM's ID !`);
            return false;
          }
        },
      },
      {
        type: "input",
        name: "office",
        message: `Enter the office # (Required)`,
        validate: (officeInput) => {
          if (officeInput) {
            return true;
          } else {
            console.log(`Please office # !`);
            return false;
          }
        },
      },
    ])
    .then((managerData) => {
      this.manager = new Manager(
        managerData.name,
        managerData.email,
        managerData.id,
        managerData.office
      );
    });
};

const promptEmployee = (teamData) => {
  console.log(`
  =====================
   Adding new Employee
  =====================
  `);
  // if (!teamData.employees) {
  //   teamData.employees = [];
  // }
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: `Enter Employee name (Required)`,
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log(`Please enter Employee name !`);
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: `Enter Employee email (Required)`,
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log(`Please enter Employee email !`);
            return false;
          }
        },
      },
      {
        type: "list",
        name: "employeeRole",
        message: "Employee's role :",
        choices: [`Engineer`, `Intern`],
      },
      {
        type: "input",
        name: "github",
        message: `Employee's github account :`,
        when: (answers) => answers.employeeRole === "Engineer",
      },
      {
        type: "input",
        name: "school",
        message: `School where Employee is registered :`,
        when: (answers) => answers.employeeRole === "Intern",
      },
      {
        type: "confirm",
        name: "confirmNewEmployee",
        message: "Would you like to enter another team member ?",
        default: true,
      },
    ])
    .then((answers) => {
      if (answers.employeeRole === `Engineer`) {
        this.employee = new Engineer(
          answers.name,
          answers.email,
          answers.id,
          answers.github
        );
      } else if (answers.employeeRole === `Intern`) {
        this.employee = new Intern(
          answers.name,
          answers.email,
          answers.id,
          answers.school
        );
      }
      // })
      // .then(( answers ) => {
      // teamData.employees.push(employeeData);
      if (answers.confirmNewEmployee) {
        return promptEmployee(teamData);
      } else {
        return teamData;
      }
    });
};

promptPM()
  .then(promptEmployee)
  .then((teamData) => {
    return generatePage(teamData);
  })
  .then((pageHTML) => {
    return writeFile(pageHTML);
  })
  .then((writeFileResponse) => {
    console.log(writeFileResponse);
    return copyFile();
  })
  .then((copyFileResponse) => {
    console.log(copyFileResponse);
  })
  .catch((err) => {
    console.log(err);
  });
