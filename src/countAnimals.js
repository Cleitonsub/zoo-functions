const data = require('../data/zoo_data');

function countAnimals(animal) {
  const result = {};
  if (animal === undefined) {
    data.species.forEach((specie) => {
      result[specie.name] = specie.residents.length;
    });
    return result;
  }

  const findSpecie = data.species.find((specie) => animal.specie === specie.name);
  const countSex = findSpecie.residents.filter((resident) => resident.sex === animal.sex).length;
  if (animal.sex === undefined) {
    return findSpecie.residents.length;
  }

  return countSex;
}

module.exports = countAnimals;
