const data = require('../data/zoo_data');

const { species, hours } = data;
const week = Object.keys(hours);

const zooInfo = () => {
  const obj = week.reduce((acc, curr) => {
    acc[curr] = {
      officeHour: `Open from ${hours[curr].open}am until ${hours[curr].close}pm`,
      exhibition: species.filter((animal) => animal.availability.includes(curr))
        .map((animal) => animal.name),
    };
    return acc;
  }, {});
  obj.Monday = {
    officeHour: 'CLOSED',
    exhibition: 'The zoo will be closed!',
  };
  return obj;
};

function getSchedule(scheduleTarget) {
  if (!scheduleTarget) {
    return zooInfo();
  }
  const check = species.some((specie) => scheduleTarget === specie.name);
  if (!check && !week.includes(scheduleTarget)) {
    return zooInfo();
  }
  if (week.includes(scheduleTarget)) {
    return { [scheduleTarget]: zooInfo()[scheduleTarget] };
  }
  return species.find((specie) => specie.name === scheduleTarget).availability;
}

module.exports = getSchedule;
