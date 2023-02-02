import {
	displayList,
	displayRecette,
	getErrorFind,
	tagElement,
} from "../views/display.js"

let newRecipesArr = []
let tagArr = []
/**
 * Ajouter et supprimer tag
 * @param {array.recipes} recipes
 */
export function crudTag(recipes) {
	//addTag
	const listcontainer = document.querySelectorAll(".list-items")
	listcontainer.forEach((e) => {
		e.addEventListener("click", (e) => {
			if (e.target.id != "") {
				tagArr.push(e.target.id.replaceAll("_", " "))
				tagArr = [...new Set(tagArr)]
				newRecipesArr = recipes.filter((e) => filterElement(e, tagArr))
				displayRecette(newRecipesArr)
				displayList(newRecipesArr)
				tagElement(tagArr, recipes)
			}
		})
	})
	//Remove Tag
	const tagContainer = document.querySelector("#tag-container")
	tagContainer.addEventListener("click", (e) => {
		if (e.target.classList.contains("fa-circle-xmark")) {
			const textTag = e.target.parentNode.textContent
			const indexOfTag = tagArr.findIndex((tag) => tag === textTag)

			if (indexOfTag !== -1) {
				tagArr.splice(indexOfTag, 1)
				tagElement(tagArr, recipes)
				newRecipesArr = recipes.filter((recipe) =>
					filterElement(recipe, tagArr)
				)
				displayRecette(newRecipesArr)
				displayList(newRecipesArr)
				e.target.parentNode.remove()
			}
		}
	})
}

/**
 * Filtre recette en fonction des tags
 * @param {element e filtre} recipe
 * @param {Array tag} tagArr
 * @returns recette(s)
 */
function filterElement(recipe, tagArr) {
	let element
	let elementArrIng = recipe.ingredients.map((eArr) =>
		eArr.ingredient.toLowerCase()
	)
	let elementArrUst = recipe.ustensils.map((eArr) => eArr.toLowerCase())
	tagArr.forEach((e) => {
		element = e
	})
	if (
		tagArr.every(
			(tag) =>
				recipe.appliance.toLowerCase().includes(tag.toLowerCase()) ||
				elementArrIng.includes(tag.toLowerCase()) ||
				elementArrUst.includes(tag.toLowerCase())
		)
	) {
		return recipe
	} else {
		const msg = "Aucune recette ne correspond à votre critère… "
		getErrorFind(msg)
	}
}
