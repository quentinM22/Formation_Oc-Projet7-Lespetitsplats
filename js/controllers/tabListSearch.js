import { ElementList } from "../model/ElementList.js";
import { viewList } from "../views/display.js";
import { tabFilterElement } from "./tabFiltListE.js";
import { crudTag } from "./tagList.js";
/**
 * 
 * @param {array} tab 
 */
export function tabListSearch(recipes) {
    console.log(recipes);
    const arr = tabFilterElement(recipes)

    const ing = new ElementList(document.querySelector("#ingSearch"))
    const app = new ElementList(document.querySelector("#appSearch"))
    const ust = new ElementList(document.querySelector("#ustSearch"))

    const ingContainer = ing.targetElement()
    const appContainer = app.targetElement()
    const ustContainer = ust.targetElement()

    const inputIngSearch = ing.inputElement('#inputIngSearch')
    const inputAppSearch = app.inputElement('#inputAppSearch')
    const inputUstSearch = ust.inputElement('#inputUstSearch')

    tabList(inputIngSearch, arr[0], ingContainer, recipes)
    tabList(inputAppSearch, arr[1], appContainer, recipes)
    tabList(inputUstSearch, arr[2], ustContainer, recipes)
}

/**
 * 
 * @param {inputDom} input 
 * @param {array.elements} elements 
 * @param {containerDom} container 
 * @param {array.recipes} recipes 
 */
function tabList(input, elements, container, recipes) {
    input.addEventListener('keyup', () => {
        const newElementsArr = elements.filter(e => e.toLowerCase().includes(input.value.toLowerCase()))
        viewList(newElementsArr, container)
        // 
        crudTag(recipes)
    })

}