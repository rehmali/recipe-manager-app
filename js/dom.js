//  (DOM manipulation functions)

/******************* */
/*** Alogrithems ****/
/******************* */

const btnExploreRecipis = document.querySelector(".btn-explore");
const btnSeeAllRecipis = document.querySelector(".btn-see-all");
const btnSubmit = document.querySelector(".btn-sign-up");

export const DOMbtn = {
  btnExploreRecipis,
  btnSeeAllRecipis,
  btnSubmit,
};

// Poplular Recipis

const recipeImage = document.querySelectorAll(".recipe-card-img");
const cookingTime = document.querySelectorAll(".cooking-time");
const servings = document.querySelectorAll(".servings");
const difficulty = document.querySelectorAll(".difficulty");
const dishName = document.querySelectorAll(".dish-name");

export const recipe = {
  recipeImage,
  cookingTime,
  servings,
  difficulty,
  dishName,
};
/*
1. Recipe Cards (Popular Recipes Section)
Practice:

Create an array of recipe objects with properties like title, time, servings, difficulty, imageURL.

Use JS to dynamically generate cards from the array instead of writing them manually.

Add sorting or filtering functionality (e.g., filter by difficulty or cooking time).



2. Community Reviews (From Our Community Section)
Practice:

Store community reviews in an array of objects (userName, dishName, rating, comment, avatarURL).

Render them dynamically with JS.

Add a "Load More" button that appends extra reviews from the array.

Maybe create a class like Review to generate and display each review.



3. Sign-Up Form (Footer Section)
Practice:

Validate the email input before submission (string methods, regex).

Store submitted emails in an array (simulate a subscriber list).

Create a Subscriber class to hold user data and methods for confirmation.

Display a success message dynamically.

4. "Explore Recipes" Button (Hero Section)
Practice:

Make the button scroll to the Popular Recipes section using JS.

Or, load recipes from a predefined array when clicked (simulate fetching from a database).


5. Recipe Search & Filter (Extra Feature)
Practice:

Add a search input field in the navbar or recipes section.

Use array filtering to show only matching recipe cards in real time.

This will give you practice with loops, filter methods, and DOM updates.

/**General Guideliness 
 *  
 app.js → Main entry point to initialize your app.

data.js → Store your arrays/objects for recipes, community posts, etc.

dom.js → Functions/classes that handle DOM creation and rendering.

events.js → All event listeners and handlers (buttons, form submits, filters).

utils.js → Helper functions (formatting text, sorting arrays, validating email, etc.).
*/
