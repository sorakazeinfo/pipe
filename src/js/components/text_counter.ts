export default class TextCounter {
	private id: string;
	private idStrict: string;

	constructor() {
		this.id = "text-counter";
		this.idStrict = "text-counter-strict"
	}

	displayCounter(target: HTMLElement, length: number, minLength: number, maxLength: number): void {
		if (minLength > 0) {
			target.classList.remove("pp-text--info");

			if (length < minLength) {
				target.classList.add("pp-text--info");
			}
		}

		if (maxLength > 0) {
			target.classList.remove("pp-text--danger");

			if (length > maxLength) {
				target.classList.add("pp-text--danger");
			}
		}

		target.innerText = length.toString();
	}

	getCharacterLength(mode: string, value: string): number {
		if (mode === "strict") {
			return value.replace(/\r\n|\n|\s|　/g,'').length;
		} else {
			return value.length;
		}
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
					textForm.addEventListener("keyup", e => {
						e.preventDefault();
						const targetElement: HTMLTextAreaElement = <HTMLTextAreaElement>e.target;
						const length: number = this.getCharacterLength("normal", targetElement.value);
						const minChar: number = parseInt(targetElement.getAttribute("data-pipe-min")) ?? 0;
						const maxChar: number = parseInt(targetElement.getAttribute("data-pipe-max")) ?? 0;
						this.displayCounter(counter, length, minChar, maxChar);
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
						const currentCharCount = targetElement.value.replace(/\r\n|\n|\s|　/g,'').length;

						if (isNaN(maxChar) === false) {
							if (currentCharCount > maxChar) {
								counter.classList.add("pp-text--danger");
							} else {
								counter.classList.remove("pp-text--danger");
							}
							counter.innerText = currentCharCount.toString();
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
