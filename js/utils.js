import { userForm, recipe, cardContainer, getRecipeAddBTN } from "./dom.js";
import { userRecipies } from "./data.js";

/*************** ********************/
/*Helper Functions for Card Display***
/*************** ******************/

// This function displays Add Recipe Modal
function displayAddRecipeModal() {
  userForm.classList.remove("hidden");
  userForm.classList.add("active");
  getRecipeAddBTN.classList.remove("active");
  getRecipeAddBTN.classList.add("hidden");
}

// This function hides Add Recipe Modal
function getCloseModal() {
  userForm.classList.add("hidden");
  userForm.classList.remove("active");

  getRecipeAddBTN.classList.add("active");
  getRecipeAddBTN.classList.remove("hidden");

  clearModalFields();
}

// This function clears fields of Add Recipe form / Modal
function clearModalFields() {
  recipe.cookingTime.value = "";
  recipe.servings.value = "";
  recipe.userDish.value = "";
  recipe.difficulty.value = "";
}

// This function adds a new card Markup in card container
function addMarkup(userGivenRecipe) {
  const html = `
        <div class="recipe-card">
              <div class="image-wrapper">
                <img
                  class="recipe-card-img"
                  src="${userGivenRecipe.imgURL}"
                  alt="${userGivenRecipe.userDish}"
                />
                <p class="serving-details">
                  <span class="cooking-time">${userGivenRecipe.cookingTime}</span>
                  <span class="servings">${userGivenRecipe.serving}</span>
                  <span class="difficulty">${userGivenRecipe.difficulty}</span>
                </p>
              </div>
              <h2 class="dish-name">${userGivenRecipe.userDish}</h2>
            </div> 
  `;
  getCloseModal();
  renderRecipeCard(html);
}

// Clear Card Container

function clearCardContainer() {
  cardContainer.innerHTML = "";
}
// display recipes from array
function displayRecipes() {
  clearCardContainer();
  userRecipies.forEach((userGivenRecipe) => {
    addMarkup(userGivenRecipe);
  });
}

// Renders Recipe on Page
function renderRecipeCard(html) {
  cardContainer.insertAdjacentHTML("beforeend", html);
}

// exports functions to other MOdules
export { displayAddRecipeModal, getCloseModal, addMarkup, displayRecipes };
