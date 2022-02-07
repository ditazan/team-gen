const inquirer = require("inquirer");
// const generatePage = require("./src/page-template");
// const { writeFile, copyFile } = require("./utils/generate-site");

const promptPM = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
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
  ]);
};


const promptEmployee = (teamData) => {
  console.log(`
  =====================
   Adding new Employee
  =====================
  `);
  if (!teamData.employees) {
    teamData.employees = [];
  }
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
        type: 'input',
        name: 'github',
        message: `Employee's github account :`,
        when: (answers) => answers.employeeRole === 'Engineer'
      },
      {
        type: 'input',
        name: 'school',
        message: `School where Employee is registered :`,
        when: (answers) => answers.employeeRole === 'Intern'
      },
      {
        type: "confirm",
        name: "confirmNewEmployee",
        message: "Would you like to enter another team member ?",
        default: true,
      },
 ])
    .then((employeeData) => {
      teamData.employees.push(employeeData);
      if (employeeData.confirmNewEmployee) {
        return promptEmployee(teamData);
      } else {
        return teamData;
      }
    });

    // function role(aRole) {
    //   return function (answers) {
    //     return answers[aRole];
    //   };
};

promptPM()
  .then(promptEmployee);
  // .then((teamData) => {
  //   return generatePage(teamData);
  // })
  // .then((pageHTML) => {
  //   return writeFile(pageHTML);
  // })
  // .then((writeFileResponse) => {
  //   console.log(writeFileResponse);
  //   return copyFile();
  // })
  // .then((copyFileResponse) => {
  //   console.log(copyFileResponse);
  // })
  // .catch((err) => {
  //   console.log(err);
  // });
