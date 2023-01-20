import { ElementList } from "../model/ElementList.js";
import { Recette } from "../model/Recette.js";
import { tabFilterElement } from "../controllers/tabFiltListE.js";

const section = document.querySelector("#content-card")

/**
 * Envoi tableau dans dom 
 * @param {array}  
 */
function displayRecette(tab){ 
    section.innerHTML = ""
    tab.forEach(e => {
        const createCard = new Recette(e).viewCard()
        section.appendChild(createCard)
    });
}
/**
 * Envoi msg dans dom 
 * @param {string} message 
 */
function getErrorFind(message){
    section.innerHTML = ""
    const notFind = document.createElement('h2')
    notFind.textContent = message
    section.appendChild(notFind)
}

function displayList(tab){
    const ingContainer = new ElementList(document.querySelector("#ingSearch")).targetElement()
    const appContainer = new ElementList(document.querySelector("#appSearch")).targetElement()
    const ustContainer = new ElementList(document.querySelector("#ustSearch")).targetElement()
    
    const array = tabFilterElement(tab)

    view(array[0], ingContainer)
    view(array[1], appContainer)
    view(array[2], ustContainer)

}
/**
 * Fonction Affichages listes 
 * @param {array} arr 
 * @param {domElement} el 
 */
export function view(arr, el) {
    el.innerHTML = ""

    const ul = document.createElement("ul");

    arr.forEach(e =>{
        const li = document.createElement("li");
        li.innerText = e
        ul.appendChild(li)
    }) 
    el.appendChild(ul)
}

export {displayRecette, getErrorFind, displayList}