/**
 * Fonction tri des element
 * @param {array} recipes
 * @returns {array.array*3}
 */
export function arrsElements(recipes) {
	let ingredientsArr = []
	let appliancesArr = []
	let ustensilsArr = []

	recipes.forEach((recipe) => {
		recipe.ingredients.forEach((ingredient) => {
			ingredientsArr.push(ingredient.ingredient.toLowerCase())
		})
		recipe.ustensils.forEach((ustensil) => {
			ustensilsArr.push(ustensil.toLowerCase())
		})
		appliancesArr.push(recipe.appliance.toLowerCase())
	})
	ingredientsArr = [...new Set(ingredientsArr)].sort()
	ustensilsArr = [...new Set(ustensilsArr)].sort()
	appliancesArr = [...new Set(appliancesArr)].sort()

	return [ingredientsArr, appliancesArr, ustensilsArr]
}
