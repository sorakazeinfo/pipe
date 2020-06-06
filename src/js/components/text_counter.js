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
				const counter = document.getElementById(id);

				if (counter !== null) {
					// Text Form
					textForm.addEventListener("keyup", function(e) {
						e.preventDefault();
						counter.innerText = e.target.value.length;
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
				const counter = document.getElementById(id);

				if (counter !== null) {
					// Text Form
					textForm.addEventListener("keyup", function(e) {
						e.preventDefault();
						counter.innerText = e.target.value.replace(/\r\n|\n|\s|　/g,'').length;
					});

					// Event Trigger
					textForm.dispatchEvent(keyupEvent);
				}
			});
		}
	}
}
