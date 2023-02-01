import { ElementList } from "../model/ElementList.js"
import { Recette } from "../model/Recette.js"
import { arrsElements } from "../controllers/arrsElements.js"
import { crudTag } from "../controllers/tagList.js"

const section = document.querySelector("#content-card")

/**
 * Envoi tableau dans dom
 * @param {array}
 */
function displayRecette(tab) {
	section.innerHTML = ""
	tab.forEach((e) => {
		const createCard = new Recette(e).viewCard()
		section.innerHTML += createCard
	})
}
/**
 * Envoi msg dans dom
 * @param {string} message
 */
function getErrorFind(message) {
	section.innerHTML = ""
	const notFind = document.createElement("h2")
	notFind.textContent = message
	section.appendChild(notFind)
}
/**
 *
 * @param {array} recipes
 */
function displayList(recipes) {
	const ingContainer = new ElementList(
		document.querySelector("#ingSearch")
	).targetElement()
	const appContainer = new ElementList(
		document.querySelector("#appSearch")
	).targetElement()
	const ustContainer = new ElementList(
		document.querySelector("#ustSearch")
	).targetElement()

	const array = arrsElements(recipes)

	viewList(array[0], ingContainer)
	viewList(array[1], appContainer)
	viewList(array[2], ustContainer)
	crudTag(recipes)
}
/**
 * Fonction Affichages listes
 * @param {array.elements} arr
 * @param {domElement} el
 */
function viewList(arr, el) {
	el.innerHTML = ""
	if (arr.length > 0) {
		const itemsToShow = arr.slice(0, 30) //Afficher 0 à 30 element
		const ul = document.createElement("ul")
		ul.className = "list-items"
		// arr.forEach((e) => {
		itemsToShow.forEach((e) => {
			const li = document.createElement("li")
			li.innerText = e
			li.id = e.replaceAll(" ", "_")
			ul.appendChild(li)
		})
		el.appendChild(ul)
	} else {
		el.innerHTML = "Aucun element trouvé"
	}
}
/**
 * Affichage des tags
 * @param {arrayoftags} tab
 */
function tagElement(tab) {
	const tagContainer = document.querySelector("#tag-container")
	tagContainer.innerHTML = ""
	const ul = document.createElement("ul")
	tab.forEach((e) => {
		const li = document.createElement("li")
		const i = document.createElement("i")
		li.innerText = e
		ul.appendChild(li)
		i.className = "fa-regular fa-circle-xmark"
		li.appendChild(i)
	})
	tagContainer.appendChild(ul)
}

export { displayRecette, getErrorFind, displayList, viewList, tagElement }
