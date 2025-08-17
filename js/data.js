import { recipe } from "./dom.js";
import { displayRecipes } from "./utils.js";

const userRecipies = [];

// Adds Recipe Object Data in Array
const updateArray = function () {
  // get latest image from user
  const file = recipe.recipeImageURL.files[0];
  const imageURL = file
    ? URL.createObjectURL(file)
    : "assets/images/default.jpg";

  if (
    recipe.userDish.value === "" ||
    recipe.cookingTime.value === "" ||
    recipe.servings.value === "" ||
    recipe.difficulty.value === ""
  ) {
    alert("All fields are required");
  } else {
    // Pushes data in Array as Objects
    userRecipies.push({
      userDish: recipe.userDish.value,
      cookingTime: recipe.cookingTime.value,
      serving: recipe.servings.value,
      difficulty: recipe.difficulty.value,
      imgURL: imageURL,
    });
    displayRecipes();
  }
};

// exports data for other modules
export { updateArray, userRecipies };
