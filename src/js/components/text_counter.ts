import AppComponent from "../base/AppComponent";
import ComponentInterface from "../base/ComponentInterface";

export default class TextCounter extends AppComponent implements ComponentInterface {
	protected id: string = "text-counter";
	private idStrict: string = "text-counter-strict";

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

	bindEvent(textForm: HTMLElement, mode: string): void {
		const keyupEvent = new Event("keyup");
		const id: string = textForm.getAttribute("data-pipe-target");
		const counter: HTMLElement = document.querySelector(id);

		if (counter !== null) {
			// Text Form
			textForm.addEventListener("keyup", e => {
				e.preventDefault();
				const targetElement: HTMLTextAreaElement = <HTMLTextAreaElement>e.target;
				const length: number = this.getCharacterLength(mode, targetElement.value);
				const minChar: number = parseInt(targetElement.getAttribute("data-pipe-min")) ?? 0;
				const maxChar: number = parseInt(targetElement.getAttribute("data-pipe-max")) ?? 0;
				this.displayCounter(counter, length, minChar, maxChar);
			});

			// Event Trigger
			textForm.dispatchEvent(keyupEvent);
		}
	}

	initialize() {
		const normalForms: NodeListOf<HTMLElement> = document.querySelectorAll(`[data-pipejs=${this.id}]`);
		normalForms.forEach(normalForm => this.bindEvent(normalForm, "normal"));

		const strictForms: NodeListOf<HTMLElement> = document.querySelectorAll(`[data-pipejs=${this.idStrict}]`)
		strictForms.forEach(strictForm => this.bindEvent(strictForm, "strict"));
	}
}
