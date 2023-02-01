/**
 * Création 1er Filtre pour Search
 * @param {array.element} recipe
 * @param {DOMInput} input
 * @returns {array.element.includes}
 */
export function firstWordSearch(recipe, input) {
	let elementFor = []
	recipe.ingredients.forEach((element) => {
		elementFor.push(element.ingredient.toLowerCase())
	})
	if (
		recipe.name.toLowerCase().includes(input.value.toLowerCase()) ||
		recipe.description.toLowerCase().includes(input.value.toLowerCase()) ||
		elementFor.includes(input.value.toLowerCase())
	) {
		return recipe
	}
}
