const planetsData = require('./data/planets.js');
const SolarSystem = require('./models/solar_system.js');
const MenuView = require('./views/menu-view.js')
const ResultView = require('./views/Result-view.js')

document.addEventListener('DOMContentLoaded', () => {
  const planetsDataModel = new SolarSystem(planetsData);
  // console.log(planetsDataModel.planets);
planetsDataModel.bindEvents();

  const menuItems = document.querySelectorAll('li.planet-menu-item')
  console.log(menuItems);


  const menuView = new MenuView(menuItems);
  menuView.bindEvents();

  const Infosection =document.querySelector('.planet-details')
  const resultView = new ResultView(Infosection)
  resultView.bindEvents();



});
