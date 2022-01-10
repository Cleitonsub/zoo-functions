const data = require('../data/zoo_data');

const withoutParams = () => ({
  NE: getAnimalWithLocation('NE'),
  NW: getAnimalWithLocation('NW'),
  SE: getAnimalWithLocation('SE'),
  SW: getAnimalWithLocation('SW'),
});

const getAnimalWithLocation = (location) => {
  const filter = data.species.filter((specie) => location === specie.location);
  return filter.map((specie) => specie.name);
};

function getAnimalMap(options) {
  if (options === undefined) {
    return withoutParams();
  }
}

module.exports = getAnimalMap;
