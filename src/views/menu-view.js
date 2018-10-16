const PubSub = require('../helpers/pub_sub.js')

const MenuView = function(menuItems){
  this.menuItems = menuItems
}


MenuView.prototype.bindEvents = function () {
  this.menuItems.forEach((item) => {
    item.addEventListener('click', (event) => {
      PubSub.publish('menu-view:planet-name', event.target.id)
    })
  })
};

module.exports = MenuView;

// menuItems.forEach((item)=>{
//   const id = item.attributes.id;
//   id.addEventListener('click',(event) => {
//     console.log("hi");
//   })
