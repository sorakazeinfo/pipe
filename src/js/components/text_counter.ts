export default class TextCounter {
	private id: string;
	private idStrict: string;

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
				const id: string = textForm.getAttribute("data-pipe-target");
				const counter: HTMLElement = document.querySelector(id);

				if (counter !== null) {
					// Text Form
					textForm.addEventListener("keyup", function(e) {
						e.preventDefault();

						const targetElement: HTMLTextAreaElement = <HTMLTextAreaElement>e.target;
						const maxChar: number = parseInt(targetElement.getAttribute("data-pipe-max"));
						const counterFirstElementChild: HTMLElement = <HTMLElement>counter.firstElementChild;

						if (isNaN(maxChar) === false) {
							if (targetElement.value.length > maxChar) {
								counterFirstElementChild.classList.add("pp-text--danger");
							} else {
								counterFirstElementChild.classList.remove("pp-text--danger");
							}
							counterFirstElementChild.innerText = targetElement.value.length.toString();
						} else {
							counter.innerText = targetElement.value.length.toString();
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
				const id: string = textForm.getAttribute("data-pipe-target");
				const counter: HTMLElement = document.querySelector(id);

				if (counter !== null) {
					// Text Form
					textForm.addEventListener("keyup", function(e) {
						e.preventDefault();

						const targetElement: HTMLTextAreaElement = <HTMLTextAreaElement>e.target;
						const maxChar: number = parseInt(targetElement.getAttribute("data-pipe-max"));
						const counterFirstElementChild: HTMLElement = <HTMLElement>counter.firstElementChild;
						const currentCharCount = targetElement.value.replace(/\r\n|\n|\s|　/g,'').length;

						if (isNaN(maxChar) === false) {
							if (currentCharCount > maxChar) {
								counterFirstElementChild.classList.add("pp-text--danger");
							} else {
								counterFirstElementChild.classList.remove("pp-text--danger");
							}
							counterFirstElementChild.innerText = currentCharCount.toString();
						} else {
							counter.innerText = currentCharCount.toString();
						}
					});

					// Event Trigger
					textForm.dispatchEvent(keyupEvent);
				}
			});
		}
	}
}
