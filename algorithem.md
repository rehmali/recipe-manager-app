New Project Idea: "Recipe Manager App"

# Core Concept

A simple app where the user can add, view, search, and delete recipes, each recipe being an object (with name, ingredients, time etc.).

# Features

Add Recipe – User enters name, ingredients (comma-separated), and cooking time.

Display All Recipes – Render recipes dynamically from an array of recipe objects.

Delete Recipe – Remove a recipe from the list (array + DOM).

Search Recipe – Search by name (filter array).

Filter by Cooking Time – (e.g., show recipes under 30 mins).

Bonus: Favorite button (mark/unmark recipes).

# Why This Project?

Arrays of objects like:

js
Copy
Edit
recipes = [
{ name: "Pasta", ingredients: ["Pasta", "Cheese"], time: 20 },
{ name: "Omelette", ingredients: ["Eggs", "Salt"], time: 5 }
];
You’ll practice adding objects, array methods (map, filter, forEach, findIndex).

Heavy DOM updates for displaying, deleting, and filtering recipes.

Alternative Idea (If You Want More Fun): "Expense Tracker App"
Add expenses (description, amount, date) as objects.

Display expenses in a list (array).

Calculate total amount dynamically (using reduce).

Search/filter by date or description.

Delete expense entry.

# working Algorithem

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

/\*\*General Guideliness

- app.js → Main entry point to initialize your app.

data.js → Store your arrays/objects for recipes, community posts, etc.

dom.js → Functions/classes that handle DOM creation and rendering.

events.js → All event listeners and handlers (buttons, form submits, filters).

utils.js → Helper functions (formatting text, sorting arrays, validating email, etc.).
\*/
