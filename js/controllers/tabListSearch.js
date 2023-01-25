import { ElementList } from "../model/ElementList.js";
import { viewList } from "../views/display.js";
import { tabFilterElement } from "./tabFiltListE.js";
/**
 * 
 * @param {array} tab 
 */
export function tabListSearch(tab) {
    const arr = tabFilterElement(tab)

    const ing = new ElementList(document.querySelector("#ingSearch"))
    const app = new ElementList(document.querySelector("#appSearch"))
    const ust = new ElementList(document.querySelector("#ustSearch"))

    const ingContainer = ing.targetElement()
    const appContainer = app.targetElement()
    const ustContainer = ust.targetElement()

    const inputIngSearch = ing.inputElement('#inputIngSearch')
    const inputAppSearch = app.inputElement('#inputAppSearch')
    const inputUstSearch = ust.inputElement('#inputUstSearch')

    tabList(inputIngSearch, arr[0], ingContainer)
    tabList(inputAppSearch, arr[1], appContainer)
    tabList(inputUstSearch, arr[2], ustContainer)
}

/**
 * 
 * @param {domInput} input 
 * @param {array} tab 
 * @param {domContainer} container 
 */
function tabList(input, tab, container) {
    input.addEventListener('keyup', () => {
        const tabListSearchE = tab.filter(e => e.toLowerCase().includes(input.value.toLowerCase()))
        console.log(tab);
        viewList(tabListSearchE, container)
    })

}