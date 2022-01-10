const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const childs = entrants.filter((entrant) => entrant.age < 18).length;
  const adults = entrants.filter((entrant) => entrant.age >= 18 && entrant.age < 50).length;
  const seniors = entrants.filter((entrant) => entrant.age >= 50).length;
  return {
    child: childs,
    adult: adults,
    senior: seniors,
  };
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  const cE = countEntrants(entrants);
  const { prices } = data;
  return cE.child * prices.child + cE.adult * prices.adult + cE.senior * prices.senior;
}

module.exports = { calculateEntry, countEntrants };
