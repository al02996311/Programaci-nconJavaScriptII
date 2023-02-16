import icons from "../img/icons.svg";
import * as model from "./model.js";
import recipeView from "./views/RecipeViews.js";
import searchViews from "./views/searchViews.js";
import ResultView from "./views/ResultView.js";
import paginationView from "./views/paginationView.js";

const recipeContainer = document.querySelector('.recipe');

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////


async function controlRecipe () {
  try {
    
    const id = window.location.hash.slice(1);

    if(id.length === 0) {
      return;
    }

    recipeView.renderSpinner();

    await model.loadRecipe(id);
    
    recipeView.render(model.state.recipe);
    
  }
  
  catch (error){
    recipeView.renderError();
  }
  
}

const controlSearchResults = async function () {
  try {
    ResultView.renderSpinner();
    query = searchViews.getQuery();
    if(query === '') {
      return;
    }
    await model.loadSearchResults(query);
    console.log(model.state.search.results);
    ResultView.render(model.getSearchResultsPage());
    paginationView.render(model.state.search);
    
  }
  catch (error) {
    console.log(error);

  }
}

function controlPagination (goToPage) {

  ResultView.render(model.getSearchResultsPage(goToPage));
  paginationView.render(model.state.search);


}
function init () {
  recipeView.addHandlerRender(controlRecipe);
  searchViews.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
}

init();