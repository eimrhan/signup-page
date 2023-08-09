let inputs = document.querySelectorAll("input")
let button = document.querySelector("button")


let isInputValid = (event) => {
	const isValid = event.target.validity.valid
	let invalidText = event.target.nextElementSibling

	if (isValid) {
		event.target.classList.remove("invalid")
		if (invalidText && invalidText.classList.contains("invalid-text"))
			invalidText.style.display = "none"
	}
	else {
		event.target.classList.add("invalid")
		if (invalidText && invalidText.classList.contains("invalid-text")) {
			invalidText.innerText = event.target.validationMessage
			invalidText.style.display = "block"
		}
	}

	isButtonValid()
}

inputs.forEach(input => {
	input.onkeyup = isInputValid
	input.onblur = isInputValid
})


let isButtonValid = () => {
	let validCount = 0

	inputs.forEach(input => {
		if (input.validity.valid)
			validCount++

		if (validCount === 2) {
			button.removeAttribute("disabled")
			button.classList.add("active")
		}
		else {
			button.setAttribute("disabled", "")
			button.classList.remove("active")
		}
	})
}
window.onload = isButtonValid


//TODO: pw için regex yaz.