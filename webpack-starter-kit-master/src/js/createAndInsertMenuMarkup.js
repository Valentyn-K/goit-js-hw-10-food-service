import menuItems from "../output_data_json/menu.json";
import menuCardTamplate from "../template/menu-card-template.hbs";


const refs = {
  menu: document.querySelector(".js-menu"),
};

// console.log(menuItems);
// console.log(menuCardTamplate);
// console.log(refs.menu);

function createAndInsertMenuMarkup(menuItems) {
  const markup = menuCardTamplate(menuItems);
  //   console.log(markup);
  refs.menu.insertAdjacentHTML("beforeend", markup);
};
createAndInsertMenuMarkup(menuItems);
