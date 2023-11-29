import url from "./api/url.js";

const container = document.querySelector(".container");

async function getRecipes() {
  try {
    const response = await fetch(url);
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
    container.innerHTML = error;
  }
}
const result = await getRecipes();

function renderHtml(result) {
  const randomRecipe = result.recipes[0];
  const recipeTitle = randomRecipe.title;
  const recipeImage = randomRecipe.image;
  const recipeSummary = randomRecipe.summary;
  const recipeOriginal = randomRecipe.spoonacularSourceUrl;

  container.innerHTML = `<h1>Title: ${recipeTitle}</h1>
                         <img src="${recipeImage}" alt="a photo with the recipe">
                         <p>${recipeSummary}</p>
                         <p>Original website: <a href="${recipeOriginal}">Click here</a></p>`;
}

renderHtml(result);
