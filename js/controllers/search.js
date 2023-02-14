//algo Solution 2

import { displayList, displayRecette, getErrorFind } from "../views/display.js"
import { tabListSearch } from "./tabListSearch.js"

const searchWord = document.querySelector("#searchForm")
let newRecipesArr = []
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
		//Solution 2
		for (let i = 0; i < recipes.length; i++) {
			const recipe = recipes[i]
			firstWordSearch(recipe, searchWord)
		}
		newRecipesArr = [...new Set(newRecipesArr)]
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
/**
 * Création Filtre pour Search
 * @param {array.element} recipe
 * @param {DOMInput} input
 * @returns {array.element.includes}
 */
function firstWordSearch(recipe, input) {
	let elementFor = []
	recipe.ingredients.forEach((element) => {
		elementFor.push(element.ingredient.toLowerCase())
	})
	if (
		recipe.name.toLowerCase().includes(input.value.toLowerCase()) ||
		recipe.description.toLowerCase().includes(input.value.toLowerCase()) ||
		elementFor.includes(input.value.toLowerCase())
	) {
		newRecipesArr.push(recipe)
	}
}
