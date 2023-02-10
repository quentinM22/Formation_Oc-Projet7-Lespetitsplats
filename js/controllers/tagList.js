import { RecipeElement } from "../model/RecipeElement.js"
import {
	displayList,
	displayRecette,
	getErrorFind,
	tagElement,
} from "../views/display.js"
import { search } from "./search.js"

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
			// Cleaner Input
			const inputSearch = document.querySelector(
				"#inputIngSearch",
				"#inputAppSearch",
				"#inputUstSearch"
			)
			inputSearch.value = ""
			if (e.target.id != "") {
				let tag
				let tagKey
				if (e.target.classList.contains("ingredient")) {
					tag = new RecipeElement(e.target.id.replaceAll("_", " ")).elTemplate(
						"ing"
					)
					tagKey = `${e.target.id}ing`
				} else if (e.target.classList.contains("appliance")) {
					tag = new RecipeElement(e.target.id.replaceAll("_", " ")).elTemplate(
						"app"
					)
					tagKey = `${e.target.id}app`
				} else if (e.target.classList.contains("ustensil")) {
					tag = new RecipeElement(e.target.id.replaceAll("_", " ")).elTemplate(
						"ust"
					)
					tagKey = `${e.target.id}ust`
				}
				// Push Objet dans tableau
				tagArr.push({
					name: e.target.id.replaceAll("_", " "),
					tagDisplay: tag,
					key: tagKey,
				})

				// Tri doublon tableau => Objet en fonction de la Key
				tagArr = [
					...new Map(tagArr.map((item) => [item["key"], item])).values(),
				]
				console.log(tagArr)
				//Filtre Recette en fonction des tagArr.name
				newRecipesArr = recipes.filter((e) => filterElement(e, tagArr))
				// Actualisation
				displayRecette(newRecipesArr)
				displayList(newRecipesArr)
				tagElement(tagArr)
			}
		})
	})
	//Remove Tag
	const tagContainer = document.querySelector("#tag-container")
	tagContainer.addEventListener("click", (e) => {
		if (e.target.classList.contains("fa-circle-xmark")) {
			// Récuperation de l'element à supprimer
			const textTag = e.target.parentNode.textContent.replaceAll(" ", "_")
			const tagToRemove = textTag + e.target.parentNode.classList
			//Récuperation index de l'élement
			const indexOfTag = tagArr.findIndex((tag) => tag.key === tagToRemove)
			//Suppréssion de l'éléments dans le tableau via sont index
			if (indexOfTag !== -1) {
				tagArr.splice(indexOfTag, 1)
				tagElement(tagArr, recipes)
				newRecipesArr = recipes.filter((recipe) =>
					filterElement(recipe, tagArr)
				)
				//Croisement Search Word et Tag
				search(newRecipesArr)
				//Actualisation
				tagElement(tagArr)
				displayRecette(newRecipesArr)
				displayList(newRecipesArr)
				//Suppression de l'élément target dans le Dom
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
				recipe.appliance.toLowerCase().includes(tag.name.toLowerCase()) ||
				elementArrIng.includes(tag.name.toLowerCase()) ||
				elementArrUst.includes(tag.name.toLowerCase())
		)
	) {
		return recipe
	} else {
		const msg = "Aucune recette ne correspond à votre critère… "
		getErrorFind(msg)
	}
}
