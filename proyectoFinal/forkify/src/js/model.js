import { API_URL } from "./config.js";
import { getJSON } from "./helpers.js";

export const state = { 
    recipe : {},
};
 
export async function loadRecipe (id) {
    try {

        const data = await getJSON(API_URL + id);

        const recipe = data.data;

        state.recipe = {
          id: recipe.recipe.id,
          title: recipe.recipe.title,
          publisher: recipe.recipe.publisher,
          sourceUrl: recipe.recipe.source_url,
          image: recipe.recipe.image_url,
          servings: recipe.recipe.servings,
          cookTime: recipe.recipe.cooking_time,
          ingredients: recipe.recipe.ingredients,
        };
        console.log(state.recipe);
    }
    catch (err) {
        console.log(`${err} 💥💥💥💥`);
    }
}
