export default class StretchTextarea {
	constructor() {
		this.id = "textarea-expanded";
	}

	initialize() {
		const textareas = document.querySelectorAll(`textarea[data-pipejs=${this.id}]`);
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
