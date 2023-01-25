import { displayList, displayRecette, getErrorFind, tagElement, viewList } from "../views/display.js"
import { tabListSearch } from "./tabListSearch.js"

let tagTable = []
export function targetTag(tab) {
    const listcontainer = document.querySelectorAll(".list-items")
    
    listcontainer.forEach(e => {
        /**
         * Systeme de recherche via les différentes liste
         * @event {click}
         */
        e.addEventListener('click', (e) => {
            console.log(tab);
            if (e.target.id != "") {
                tagTable.push(e.target.id.replaceAll('_', ' '))
                tagTable = [...new Set(tagTable)]
                //Filter pour rechercher les recettes via listes  
               
               const elArr = tab.filter((e) =>
               filterElement(e, tagTable)
            )
                // init
                displayRecette(elArr)
                displayList(elArr)
                tagElement(tagTable)
              
            } 
    })
    
})
}
/**
 * 
 * @param {element e filtre} e 
 * @param {Array tag} tagTab 
 * @returns recette(s)
 */
function filterElement(e, tagTab) {
    let element
    let elementArrIng = e.ingredients.map(eArr => eArr.ingredient.toLowerCase());
    let elementArrUst = e.ustensils.map(eArr => eArr.toLowerCase());
    tagTab.forEach(e =>{
        element  = e
    })
    if (tagTab.every(tag => e.appliance.toLowerCase().includes(tag.toLowerCase())
    || elementArrIng.includes(tag.toLowerCase())
    || elementArrUst.includes(tag.toLowerCase()))) {
        return e;
    }else{
        const msg = "Aucune recette ne correspond à votre critère… "
            getErrorFind(msg)
    }
}


