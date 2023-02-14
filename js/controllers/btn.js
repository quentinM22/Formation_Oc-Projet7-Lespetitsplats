/**
 * Ouverture / Fermeture Bouton Dropdown recherche
 */
export function toggleBtn() {
	const ingSearchDropdown = document.querySelector("#ingSearch .btn-dropdown")
	const ingSearchInput = document.querySelector("#ingSearch .secondSearch")
	const ingSearchInputChev = document.querySelector(
		"#ingSearch .secondSearch .fa-chevron-up"
	)
	const appSearchDropdown = document.querySelector("#appSearch .btn-dropdown")
	const appSearchInput = document.querySelector("#appSearch .secondSearch")
	const appSearchInputChev = document.querySelector(
		"#appSearch .secondSearch .fa-chevron-up"
	)
	const ustSearchDropdown = document.querySelector("#ustSearch .btn-dropdown")
	const ustSearchInput = document.querySelector("#ustSearch .secondSearch")
	const ustSearchInputChev = document.querySelector(
		"#ustSearch .secondSearch .fa-chevron-up"
	)
	toggleDandB(
		ingSearchDropdown,
		ingSearchInput,
		ingSearchInputChev,
		[appSearchInput, ustSearchInput],
		[appSearchDropdown, ustSearchDropdown]
	)
	toggleDandB(
		appSearchDropdown,
		appSearchInput,
		appSearchInputChev,
		[ingSearchInput, ustSearchInput],
		[ustSearchDropdown, ingSearchDropdown]
	)
	toggleDandB(
		ustSearchDropdown,
		ustSearchInput,
		ustSearchInputChev,
		[appSearchInput, ingSearchInput],
		[appSearchDropdown, ingSearchDropdown]
	)
}
function toggleDandB(
	btnDropdown,
	inputSearchInput,
	btnChevron,
	othersInput,
	othersDrop
) {
	btnDropdown.addEventListener("click", function () {
		hideOthers(othersInput, othersDrop)
		inputSearchInput.classList.toggle("hidden")
		btnDropdown.classList.toggle("hidden")
	})
	btnChevron.addEventListener("click", function () {
		hideOthers(othersInput, othersDrop)
		btnDropdown.classList.toggle("hidden")
		inputSearchInput.classList.toggle("hidden")
	})
}
function hideOthers(othersInput, othersDrop) {
	othersInput.forEach(function (othersInput) {
		othersInput.classList.add("hidden")
	})
	othersDrop.forEach(function (othersDrop) {
		othersDrop.classList.remove("hidden")
	})
}
