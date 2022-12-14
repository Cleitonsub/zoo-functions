const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  const employees = data.employees.find((employee) =>
    (employee.firstName === employeeName || employee.lastName === employeeName));
  return employees;
}

module.exports = getEmployeeByName;
