import { recipes } from "./data/recipes.js"
import { search } from "./controllers/search.js";
import { displayList, displayRecette } from "./views/display.js";
import { tabListSearch } from "./controllers/tabListSearch.js";

// console.log(tabFilterElement(recipes));
console.log(recipes);
//Initialisation tableaux en ouverture de page
displayRecette(recipes)
displayList(recipes)
tabListSearch(recipes)
//SearchWord 
const searchWord = document.querySelector("#searchForm") 
searchWord.addEventListener("keyup", ()=>{search(recipes)})


