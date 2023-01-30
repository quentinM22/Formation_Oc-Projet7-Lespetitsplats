import { displayList, displayRecette, getErrorFind, tagElement, viewList } from "../views/display.js"


let elArr = []
let tagTable = []
/**
 * Ajouter et supprimer tag
 * @param {array.recipes} tab 
 */
export function crudTag(tab) {
    //addTag
    const listcontainer = document.querySelectorAll(".list-items")
    listcontainer.forEach(e => {
        e.addEventListener('click', (e) => {
            if (e.target.id != "") {
                tagTable.push(e.target.id.replaceAll('_', ' '))
                tagTable = [...new Set(tagTable)]
                elArr = tab.filter((e) =>
                    filterElement(e, tagTable)
                )
                displayRecette(elArr)
                displayList(elArr)
                tagElement(tagTable)
            }
        })
    })
    //Remove Tag
    const tagContainer = document.querySelector('#tag-container')
    tagContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('fa-circle-xmark')) {
            const textTag = e.target.parentNode.textContent;
            const indexOfTag = tagTable.findIndex(el => el === textTag);

            if (indexOfTag !== -1) {
                tagTable.splice(indexOfTag, 1);
                tagElement(tagTable);
                elArr = tab.filter((e) =>
                    filterElement(e, tagTable)
                );
                displayRecette(elArr);
                displayList(elArr);
                e.target.parentNode.remove();
            }
        }
    });
}



/**
 * Filtre recette en fonction des tags
 * @param {element e filtre} e 
 * @param {Array tag} tagTab 
 * @returns recette(s)
 */
function filterElement(e, tagTab) {
    let element
    let elementArrIng = e.ingredients.map(eArr => eArr.ingredient.toLowerCase());
    let elementArrUst = e.ustensils.map(eArr => eArr.toLowerCase());
    tagTab.forEach(e => {
        element = e
    })
    if (tagTab.every(tag => e.appliance.toLowerCase().includes(tag.toLowerCase())
        || elementArrIng.includes(tag.toLowerCase())
        || elementArrUst.includes(tag.toLowerCase()))) {
        return e;
    } else {
        const msg = "Aucune recette ne correspond à votre critère… "
        getErrorFind(msg)
    }
}



