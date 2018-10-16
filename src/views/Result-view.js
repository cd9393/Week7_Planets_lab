const PubSub = require('../helpers/pub_sub.js')

const ResultView = function(container){
  this.container = container;
};

ResultView.prototype.bindEvents = function () {
  PubSub.subscribe('SolarSystem:ClickedPlanetInfo',(event) => {
    const planet = event.detail;
    this.render(planet);
    key = this.keyArray(planet);
    console.log(key);
  })
};

ResultView.prototype.keyArray = function (planet) {
  const keysArray = Object.keys(planet)
  return keysArray;
};

ResultView.prototype.render = function (planet) {
  const infoParagraph = document.createElement('p');
  infoParagraph.textContent = `The planet ${planet.name} has a orbit of ${planet.orbit}`;
  this.container.innerHTML = '';
  this.container.appendChild(infoParagraph);
};

module.exports = ResultView;
