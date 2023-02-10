import { ElementList } from "../model/ElementList.js"
import { viewList } from "../views/display.js"
import { arrsElements } from "./arrsElements.js"
import { crudTag } from "./tagList.js"
/**
 *
 * @param {array} tab
 */
export function tabListSearch(recipes) {
	const arr = arrsElements(recipes)

	const ing = new ElementList(document.querySelector("#ingSearch"))
	const app = new ElementList(document.querySelector("#appSearch"))
	const ust = new ElementList(document.querySelector("#ustSearch"))

	const ingContainer = ing.targetElement()
	const appContainer = app.targetElement()
	const ustContainer = ust.targetElement()

	const inputIngSearch = ing.inputElement("#inputIngSearch")
	const inputAppSearch = app.inputElement("#inputAppSearch")
	const inputUstSearch = ust.inputElement("#inputUstSearch")

	tabList(inputIngSearch, arr[0], ingContainer, recipes, "ingredient")
	tabList(inputAppSearch, arr[1], appContainer, recipes, "appliance")
	tabList(inputUstSearch, arr[2], ustContainer, recipes, "ustensil")
}

/**
 *
 * @param {inputDom} input
 * @param {array.elements} elements
 * @param {containerDom} container
 * @param {array.recipes} recipes
 */
function tabList(input, elements, container, recipes, keyClass) {
	input.addEventListener("keyup", () => {
		const newElementsArr = elements.filter((e) =>
			e.toLowerCase().includes(input.value.toLowerCase())
		)
		viewList(newElementsArr, container, keyClass)
		//
		crudTag(recipes)
	})
}
