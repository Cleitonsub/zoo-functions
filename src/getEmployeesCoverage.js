const data = require('../data/zoo_data');

// Este requisito foi realizado com a ajuda da nossa amiga Regiane Santos (Recfs235)
// https://github.com/Recfs235

const { species, employees } = data;

const EmployeeData = (employee) => {
  const { id, responsibleFor } = employee;
  return {
    id,
    fullName: `${employee.firstName} ${employee.lastName}`,
    species: responsibleFor
      .map((animal) => species
        .find((specie) => specie.id === animal).name),
    locations: responsibleFor
      .map((animal) => species
        .find((specie) => specie.id === animal).location),
  };
};

function getEmployeesCoverage(idOrName) {
  if (idOrName === undefined) {
    const allEmployeesData = employees.map(EmployeeData);
    return allEmployeesData;
  }
  const { name, id } = idOrName;
  const emplo = employees.find((employee) => employee.firstName === name
  || employee.lastName === name || employee.id === id);

  if (emplo === undefined) {
    throw new Error('Informações inválidas');
  }
  return EmployeeData(emplo);
}

module.exports = getEmployeesCoverage;
