import { displayList, displayRecette, getErrorFind } from "../views/display.js";
import { findFirstSearch } from "./firstSearch.js";
import { tabListSearch } from "./tabListSearch.js";

const searchWord = document.querySelector("#searchForm")

/**
 * Fonction de recherche Principal
 * @param {data.array} tab 
 */
export function search(tab) {
    if (searchWord.value.length < 3) {
        displayRecette(tab)
        displayList(tab)
    } else {
        const findElementArr = tab.filter((e) =>
            findFirstSearch(e, searchWord)
        )
        if (findElementArr.length === 0) {
            const msg = "Aucune recette ne correspond à votre critère… "
            getErrorFind(msg)

        } else {
            displayRecette(findElementArr)
            displayList(findElementArr)
            tabListSearch(findElementArr) 
            // const tagContainer = document.querySelector('#tag-container')
            // tagContainer.innerHTML = ""
        }

    }
    
}

