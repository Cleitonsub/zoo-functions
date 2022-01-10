const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const person = data.employees.find((element) => element.id === id).responsibleFor[0];
  const animal = data.species.find((element) => element.id === person).residents;
  const oldAnimal = animal.reduce((acc, curr) => [Math.max(acc, curr.age)], 0);
  const targetAnimal = animal.find((element) => element.age === oldAnimal[0]);
  const { name, sex, age } = targetAnimal;
  return [name, sex, age];
}

module.exports = getOldestFromFirstSpecies;
