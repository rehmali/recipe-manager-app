//  (attach event listeners here)
import { getRecipeSubmitBTN, getRecipeAddBTN, closeModalBTN } from "./dom.js";
import {
  displayAddRecipeModal,
  getCloseModal,
  displayRecipes,
} from "./utils.js";

import { updateArray } from "./data.js";

// Add button Event, Displays Modal
getRecipeAddBTN.addEventListener("click", displayAddRecipeModal);

// Close Modal Event
closeModalBTN.addEventListener("click", getCloseModal);
// press escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    if (closeModalBTN) {
      getCloseModal();
    }
  }
});

// Submit Recipe button Event
document.addEventListener("DOMContentLoaded", () => {
  if (document.body.classList.contains("page-user-recipes")) {
    const recipeSubmitBTN = getRecipeSubmitBTN();
    if (recipeSubmitBTN) {
      recipeSubmitBTN.addEventListener("click", (e) => {
        e.preventDefault();
        s;
        updateArray();
        displayRecipes();
      });
    }
  }
});
