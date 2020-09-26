import AppComponent from "../base/AppComponent";
import ComponentInterface from "../base/ComponentInterface";

export default class StretchTextarea extends AppComponent implements ComponentInterface {
	protected id: string = "textarea-expanded";

	public initialize(): void {
		const textareas = document.querySelectorAll(`textarea[${this.entry}=${this.id}]`);
		if (textareas.length > 0) {
			textareas.forEach((textarea) => {
				this.expandedTextarea(textarea);
				textarea.addEventListener("input", e => this.expandedTextarea(e.target));
			});
		}
	}

	expandedTextarea(target) {
		target.style.height = [target.scrollHeight, "px"].join("");
	}
}
