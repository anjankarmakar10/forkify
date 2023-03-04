export const state = {
  recipe: {},
};

export const loadRecipe = async id => {
  try {
    let response = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
    );
    let result = await response.json();
    const { recipe } = result.data;

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

    if (!response.ok) throw new Error(`${result.message} (${response.status})`);
    console.log(state.recipe);
  } catch (error) {
    alert(error);
  }
};
