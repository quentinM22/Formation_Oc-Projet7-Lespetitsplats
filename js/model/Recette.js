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
        let card = document.createElement('div')
        card.className = "card"
        const img = document.createElement('img')
        img.className = "card-img-top"
        const cardBody = document.createElement('div')
        cardBody.className = "card-body"
        const cardTitle = document.createElement('h2')
        cardTitle.textContent = this.name
        const cardDescription = document.createElement('p')
        cardDescription.textContent = this.description
        const cardIngredients = document.createElement('ul')
        const cardIngredient = document.createElement('li')

        card.appendChild(img)
        card.appendChild(cardBody)
        cardBody.appendChild(cardTitle)
        cardBody.appendChild(cardDescription)
        cardBody.appendChild(cardIngredients)
        cardIngredients.appendChild(cardIngredient)
        return card
    }

}
