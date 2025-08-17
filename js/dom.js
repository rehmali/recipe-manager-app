//  (DOM )

// Form Serving details
const userDish = document.querySelector(".user-dish-name");
const cookingTime = document.querySelector(".user-cooking-time");
const servings = document.querySelector(".user-servings");
const difficulty = document.getElementById("difficulty");
const recipeImageURL = document.getElementById("image-upload");

// exporting recipe data
export const recipe = {
  userDish,
  cookingTime,
  servings,
  difficulty,
  recipeImageURL,
};

// Add Recipe button
export const getRecipeAddBTN = document.querySelector(".btn-add-recipi");

// close Modal btn
export const closeModalBTN = document.querySelector(".modal-close");

// User form Modal
export const userForm = document.querySelector(".user-form");

// Card Container of User Cards
export const cardContainer = document.querySelector(".recipe-card-container");

// This way null will not be exported recipe submit button
export function getRecipeSubmitBTN() {
  return document.querySelector(".btn-submit");
}
