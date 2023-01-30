/**
 * Création 1er Filtre pour Search
 * @param {array.element} e 
 * @param {DOMInput} input 
 * @returns {array.element.includes}
 */
export function findFirstSearch(e, input) {
    let elementFor = []
    e.ingredients.forEach(element => {
        elementFor.push(element.ingredient.toLowerCase())
    })
    if (
        e.name.toLowerCase().includes(input.value.toLowerCase())
        ||
        e.description.toLowerCase().includes(input.value.toLowerCase())
        ||
        elementFor.includes(input.value.toLowerCase())
    ) {
        return e
    }
}
