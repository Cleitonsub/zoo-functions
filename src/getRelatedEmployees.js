const data = require('../data/zoo_data');

function isManager(id) {
  const managers = data.employees.some((employee) => employee.managers.includes(id));
  return managers;
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  if (isManager(managerId) === true) {
    const managers = data.employees.filter((employee) => employee.managers.includes(managerId));
    return managers.map((employee) => `${employee.firstName} ${employee.lastName}`);
  }
}

module.exports = { isManager, getRelatedEmployees };
