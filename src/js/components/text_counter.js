export default class TextCounter {
	constructor() {
		this.id = "text-counter";
		this.idStrict = "text-counter-strict"
	}

	initialize() {
		const keyupEvent = new Event("keyup");

		// Normal
		let textForms = document.querySelectorAll(`[data-pipejs=${this.id}]`);
		if (textForms.length > 0) {
			textForms.forEach(textForm => {
				const id = textForm.getAttribute("data-pipe-target");
				const counter = document.querySelector(id);

				if (counter !== null) {
					// Text Form
					textForm.addEventListener("keyup", function(e) {
						e.preventDefault();
						const maxChar = parseInt(e.target.getAttribute("data-pipe-max"));

						if (Number.isNaN(maxChar) === false) {
							if (e.target.value.length > maxChar) {
								counter.firstElementChild.classList.add("pp-text--danger");
							} else {
								counter.firstElementChild.classList.remove("pp-text--danger");
							}
							counter.firstElementChild.innerText = e.target.value.length;
						} else {
							counter.innerText = e.target.value.length;
						}
					});

					// Event Trigger
					textForm.dispatchEvent(keyupEvent);
				}
			});
		}

		// Strict
		textForms = document.querySelectorAll(`[data-pipejs=${this.idStrict}]`);
		if (textForms.length > 0) {
			textForms.forEach(textForm => {
				const id = textForm.getAttribute("data-pipe-target");
				const counter = document.querySelector(id);

				if (counter !== null) {
					// Text Form
					textForm.addEventListener("keyup", function(e) {
						e.preventDefault();
						const currentCharCount = e.target.value.replace(/\r\n|\n|\s|　/g,'').length;
						const maxChar = parseInt(e.target.getAttribute("data-pipe-max"));

						if (Number.isNaN(maxChar) === false) {
							if (currentCharCount > maxChar) {
								counter.firstElementChild.classList.add("pp-text--danger");
							} else {
								counter.firstElementChild.classList.remove("pp-text--danger");
							}
							counter.firstElementChild.innerText = currentCharCount;
						} else {
							counter.innerText = currentCharCount;
						}
					});

					// Event Trigger
					textForm.dispatchEvent(keyupEvent);
				}
			});
		}
	}
}
