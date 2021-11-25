const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const animal = data.species.filter((specie) => ids.includes(specie.id));
  return animal;
}

module.exports = getSpeciesByIds;
