import { async } from 'regenerator-runtime';
import { API_URL, API_KEY } from './config.js';
import { getJSON } from './helpers.js';
export const state = {
  recipe: {},
  search: {
    query: '',
    results: [],
  },
};

export const loadRecipe = async id => {
  try {
    // get data from api
    const data = await getJSON(`${API_URL}${id}`);
    const { recipe } = data.data;

    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    };
  } catch (error) {
    console.error(`${error} 💥💥💥`);
    throw error;
  }
};

export const loadSearchResults = async query => {
  try {
    const { data } = await getJSON(`${API_URL}?search=${query}`);

    const recipes = data.recipes.map(recipe => {
      return {
        id: recipe.id,
        title: recipe.title,
        publisher: recipe.publisher,
        image: recipe.image_url,
      };
    });

    state.search.query = query;
    state.search.results = recipes;
  } catch (error) {
    console.error(`${error} 💥💥💥`);
    throw error;
  }
};
