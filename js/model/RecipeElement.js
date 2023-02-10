export class RecipeElement {
	constructor(name) {
		this.name = name
	}
	elTemplate(keyClass) {
		const li = document.createElement("li")
		li.className = "ing"
		const i = document.createElement("i")
		li.innerText = this.name
		li.className = keyClass
		i.className = "fa-regular fa-circle-xmark"
		li.appendChild(i)
		return li
	}
}
