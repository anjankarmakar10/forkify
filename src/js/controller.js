import * as model from './model';
import recipeView from './views/recipeView';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { async } from 'regenerator-runtime';

// https://forkify-api.herokuapp.com/v2
// 7b40eb70-ba1d-49d7-bf53-3c48c613d3a7
// https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bcd09
// https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza

////////

///////////////////////////////

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
    console.error(error.message);
  }
};

function init() {
  recipeView.addHandlerRender(coltrolRecipes);
}
init();
