import icons from "../img/icons.svg";
import * as model from "./model.js";
import recipeView from "./views/RecipeViews";

const recipeContainer = document.querySelector('.recipe');

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

async function controlRecipe () {
  try {
    const id = window.location.hash.slice(1);
    console.log(id);
    if(id.length === 0) {
      return;
    }

    recipeView.renderSpinner();

    await model.loadRecipe(id);
    
    recipeView.render(model.state.recipe);
    
  }
  
  catch (error){
    alert(error);
  }
  
}

const eventos = [
  "hashchange",
  "load"
];

const d = window;
eventos.forEach((ev) => {
  d.addEventListener(ev,(e) =>{
    controlRecipe();
  });
});