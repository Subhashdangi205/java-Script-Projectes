const searchBox = document.querySelector('.searchBox');                                                              // get the search box
const searchBtn = document.querySelector('.searchBtn');                                                              // get the search button
const recipeContainer = document.querySelector('.recipe-container');                                                 // get the recipe container
const recipeDetailsContent = document.querySelector('.recipe-details-content');                                      // get the recipe details content
const recipeCloseBtn = document.querySelector('.recipe-close-btn');                                                  // get the recipe close button
//  in this use the MealDB ki api to get the recipes
// function to get recipes




const fetchRecipes = async (quary) => {                                                                             // async function to fetch the recipes
    recipeContainer.innerHTML = "<h2>Fetching Recipes...</h2>";                                                     // show the fetching recipes message
    const data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${quary}`);                      // fetch the data from the api
    const response = await data.json();                                                                             // convert the data into json format
    //..............................................................................................................//


    recipeContainer.innerHTML = "";                                                                                 // clear the previous recipes
    response.meals.forEach(meal => {                                                                                // loop through the data
        const recipeDiv = document.createElement('div');                                                            // create a div element for storing img of recipe
        recipeDiv.classList.add('recipe');                                                                          // add a class to the div
        recipeDiv.innerHTML =                                                                                       // add the img and name of the recipe to the div
            `                                                                                                       
        <img src="${meal.strMealThumb}" alt="${meal.strMeal}"<br>                                                                               
        <h3>${meal.strMeal}</h3>
        <p><span>${meal.strArea}</span> Dish</p>
        <p>Belongs to <span>${meal.strCategory}</span> Category</p>

        `
    //................................................add button to view recipe..........................................// 
        const button = document.createElement('button');                                                            // create a button element
        button.textContent = "View Recipe";                                                                         // add text to the button
        recipeDiv.appendChild(button);                                                                             // append the button to the div
        recipeContainer.appendChild(recipeDiv);                                                                    // append the div to the recipe container
                                                                                                                   // add event listener to the button
        button.addEventListener('click', () => {                                                                  // call the function to get the recipe details
            openRecipePopup(meal);                                                                               // pass the meal object to the function
        });

    });
}

//........................................function to fetch ingredients..................................................//
const fetchIngrediens = (meal) => {                                                                               // function to fetch the ingredients
    let ingredientsList = "";                                                                                     // create a variable to store the ingredients
    for (let i = 1; i <= 20; i++) {                                                                              // loop through the ingredients
        const ingredient = meal[`strIngredient${i}`];                                                            // get the ingredient
        if (ingredient) {                                                                                        // check if the ingredient is not null
            const measure = meal[`strMeasure${i}`];                                                              // get the measure of the ingredient
            ingredientsList += `<li>${measure}  ${ingredient}</li>`;                                             // add the ingredient to the list
        }                                                                                                       // add the measure of the ingredient to the list
        else {
            break;                                                                                              // break the loop if the ingredient is null
        }
    }
    return ingredientsList;                                                                                     // return the ingredients list
}


//.........................................recipe deatils.................................................................//
const openRecipePopup = (meal) => {                                                                              // function to open the recipe popup
    recipeDetailsContent.innerHTML = `                                                                           
    <h2 class="recipeName">${meal.strMeal}</h2>
    <h3>Ingredients:</h3>
    <ul class="IngredientsList">${fetchIngrediens(meal)}</ul>
    
    <div class="recipe-instructions">
        <h3>Instructions:</h3>
        <p>${meal.strInstructions}</p>
    </div>
      `
    recipeDetailsContent.parentElement.style.display = 'block';                                                    // display the recipe details popup


}


//....................................................search button event listener..........................................//
searchBtn.addEventListener('click', (e) => {                                                                        // add event listener to the search button
    e.preventDefault();                                                                                            // prevent the default action of the form
    const searchInput = searchBox.value.trim();
    if (!searchInput) {                                                                                            // check if the search input is empty
        recipeContainer.innerHTML = `<h2>Please enter a valid recipe name</h2>`;                                   // show a message to enter a valid recipe name

        return;
    }                                                                                                              // call the function to get the 
    fetchRecipes(searchInput);                                                                                     // recipes by passing the search input
});


//....................................................close button event listener..........................................//
recipeCloseBtn.addEventListener('click', () => {                                                                   // add event listener to the close button
    recipeDetailsContent.parentElement.style.display = 'none';                                                     // hide the recipe details popup                                                     

});
