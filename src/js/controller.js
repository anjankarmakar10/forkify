import * as model from './model';
import recipeView from './views/recipeView';
import searchView from './views/searchView';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { async } from 'regenerator-runtime';

const coltrolRecipes = async () => {
  try {
    let id = window.location.hash.slice(1);

    if (!id) return;

    recipeView.renderSpnier();

    // load the recipe
    await model.loadRecipe(id);

    // render the recipe
    recipeView.render(model.state.recipe);
  } catch (error) {
    recipeView.renderMessage();
  }
};

const controlSearchResults = async () => {
  try {
    // get search query
    const query = searchView.getQuery();
    if (!query) return;

    //load search results
    await model.loadSearchResults(query);

    //render reuslt
    console.log(model.state.search);
  } catch (error) {
    console.error(error);
  }
};

function init() {
  searchView.addHandlerSearch(controlSearchResults);
  recipeView.addHandlerRender(coltrolRecipes);
}
init();
