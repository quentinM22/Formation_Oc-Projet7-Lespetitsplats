import { displayList, displayRecette, getErrorFind } from "../views/display.js"
import { firstWordSearch } from "./firstSearch.js"
import { tabListSearch } from "./tabListSearch.js"

const searchWord = document.querySelector("#searchForm")

/**
 * Fonction de recherche Principal
 * @param {data.array} recipes
 */
export function search(recipes) {
	const tagContainer = document.querySelector("#tag-container")
	tagContainer.innerHTML = ""
	if (searchWord.value.length < 3) {
		displayRecette(recipes)
		displayList(recipes)
	} else {
		const newRecipesArr = recipes.filter((recipe) =>
			firstWordSearch(recipe, searchWord)
		)
		if (newRecipesArr.length === 0) {
			const msg = "Aucune recette ne correspond à votre critère… "
			getErrorFind(msg)
		} else {
			displayRecette(newRecipesArr)
			displayList(newRecipesArr)
			tabListSearch(newRecipesArr)
		}
	}
}
