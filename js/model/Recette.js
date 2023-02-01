export class Recette {
	constructor(tab) {
		this.id = tab.id
		this.name = tab.name
		this.servings = tab.servings
		this.ingredients = tab.ingredients
		this.time = tab.time
		this.description = tab.description
		this.appliance = tab.appliance
		this.ustensils = tab.ustensils
	}
	viewCard() {
		let ingredientList = ""
		this.ingredients.forEach((e) => {
			return (ingredientList += `
                <li class="card__ingredients">
                    <span>${e.ingredient}</span>
                    ${e.quantity ? ": " + e.quantity.toString() : ""}${
				e.unit ? e.unit.toLowerCase() : ""
			} 
                </li>
                `)
		})
		return `
        <article class="card">
            <a href="#">
                <div class="card__thumb"></div>
                <div class="card__body">
                    <div class="card__head">
                        <h2 class="card__title">${this.name}</h2>
                        <div class="card__time">
                            <i class="fa-regular fa-clock"></i>
                            <p class="card__minutes">${this.time} min</p>
                        </div>
                    </div>
                    <div class="card__content">
                        <ul class="card__ingredients">
                            ${ingredientList}                
                        </ul>
                        <p class="card__description">
                        ${this.description}
                        </p>
                    </div>
                </div>
            </a>
        </article>
        `
	}
}
