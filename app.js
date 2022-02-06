const inquirer = require("inquirer");
const fs = require("fs");

inquirer
  .prompt([
    {
      type: "input",
      name: "managerName",
      message: `Project Manager's name :`,
    },
    {
      type: "input",
      name: "managerEmail",
      message: `Project Manager's email :`,
    },
    {
      type: "input",
      name: "managerId",
      message: `Project Manager's ID :`,
    },
    {
      type: "input",
      name: "officeNum",
      message: `Office Number :`,
    },
  ])
  .then((data) => {
    const managerData = data;
    console.log(managerData);
  })
  .catch((err) => console.log(err));
