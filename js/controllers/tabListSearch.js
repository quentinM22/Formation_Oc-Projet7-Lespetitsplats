import { ElementList } from "../model/ElementList.js";
import { view } from "../views/display.js";
import { tabFilterElement } from "./tabFiltListE.js";

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


function tabList(input, tab, container) {
    input.addEventListener('keyup', () => {
        const tabListSearchE = tab.filter(e => e.toLowerCase().includes(input.value.toLowerCase()))
        view(tabListSearchE, container)
    })

}