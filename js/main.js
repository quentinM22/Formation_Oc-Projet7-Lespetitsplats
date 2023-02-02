import { recipes } from "./data/recipes.js"
import { search } from "./controllers/search.js"
import { displayList, displayRecette } from "./views/display.js"
import { tabListSearch } from "./controllers/tabListSearch.js"
import { crudTag } from "./controllers/tagList.js"
import { toggleBtn } from "./controllers/btn.js"

// console.log(arrsElements(recipes));
console.log(recipes)

//SearchWord
const searchWord = document.querySelector("#searchForm")
searchWord.addEventListener("keyup", () => {
	search(recipes), crudTag(recipes)
})

//Initialisation tableaux en ouverture de page
displayRecette(recipes)
displayList(recipes)
tabListSearch(recipes)
crudTag(recipes)
toggleBtn()
