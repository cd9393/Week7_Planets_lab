const PubSub = require('../helpers/pub_sub.js')

const SolarSystem = function(planets) {
  this.planets = planets;
};

SolarSystem.prototype.bindEvents = function () {
  PubSub.publish('SolarSystem: All-planets-loaded',this.planets);

  PubSub.subscribe('menu-view:planet-name',(event) => {
    foundPlanet = this.getPlanet(event.detail);
PubSub.publish('SolarSystem:ClickedPlanetInfo',foundPlanet)
  })
}

// SolarSystem.prototype.render = function (planet) {
// const infoParagraph = document.createElement('p');
// infoParagraph.textContent = `The planet`


SolarSystem.prototype.getPlanet = function (id) {
  foundPlanet = this.planets.find((planet) => {
    return planet.name === id
  })
  return foundPlanet
};

module.exports = SolarSystem;
// this.planets.forEach((planet) => {
//     if (planet["name"]===`${event.detail}`) {
//       console.log(planet);;
//     }
//   })
// })
