/**
 * Fonction tri des element
 * @param {array} tab 
 * @returns {array.array*3} 
 */
export function tabFilterElement(tab) {
    let ingredientsArr = []
    let appliancesArr = []
    let ustensilsArr = []

    tab.forEach(e => {
        e.ingredients.forEach(e => {
            ingredientsArr.push(e.ingredient)
        });
        e.ustensils.forEach(e => {
            ustensilsArr.push(e)
        })
        appliancesArr.push(e.appliance)
    });
    ingredientsArr = [...new Set(ingredientsArr)].sort()
    ustensilsArr = [...new Set(ustensilsArr)].sort()
    appliancesArr = [...new Set(appliancesArr)].sort()

    return [ingredientsArr, appliancesArr, ustensilsArr]
}