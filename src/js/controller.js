import * as model from './model';
import recipeView from './views/recipeView';
import searchView from './views/searchView';
import resultsView from './views/resultsView';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { async } from 'regenerator-runtime';

// this condition not clear the ui state  save to reload
if (module.hot) {
  module.hot.accept();
}

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
    resultsView.renderSpnier();

    // get search query
    const query = searchView.getQuery();
    if (!query) return;

    //load search results
    await model.loadSearchResults(query);

    resultsView._clear();

    const data = model.state.search.results;

    //render reuslt
    console.log(data);
    resultsView.render(data);
  } catch (error) {
    console.error(error);
  }
};

function init() {
  searchView.addHandlerSearch(controlSearchResults);
  recipeView.addHandlerRender(coltrolRecipes);
}
init();
