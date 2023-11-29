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

  container.innerHTML = `<h1>${recipeTitle}</h1>
                         <img src="${recipeImage}" alt="a photo with a random recipe">
                         <h2>Summary</h2>
                         <p class="summary">${recipeSummary}</p>
                         <p class="original">Original recipe: <a href="${recipeOriginal}">Click here</a></p>`;
}

renderHtml(result);
