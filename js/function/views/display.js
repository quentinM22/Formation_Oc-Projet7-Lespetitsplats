import {Recette} from "../../class/Recette.js";
const section = document.querySelector("#content-card")
/**
 * Envoi tableau dans dom 
 * @param {array}  
 */
export function displayRecette(tab){ 
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
export function getErrorFind(message){
    section.innerHTML = ""
    const notFind = document.createElement('h2')
    notFind.textContent = message
    section.appendChild(notFind)
}

