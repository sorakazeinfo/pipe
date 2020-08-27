export default class Accordion {
	private id: string;
	private activeClass: string;

	constructor() {
		this.id = "accordion";
		this.activeClass = "pipejs-accordion-active";
	}

	initialize() {
		const triggers: NodeListOf<HTMLElement> = document.querySelectorAll(`[data-pipejs=${this.id}]`);

		triggers.forEach(trigger => {
			const target: string = trigger.getAttribute("data-pipe-target");
			const targetElement: HTMLElement = document.querySelector(target);

			if (targetElement !== null) {
				trigger.addEventListener("click", e => {
					e.preventDefault();
					this.click(targetElement);
				});
			}
		});
	}

	click(targetElement: HTMLElement): void {
		if (targetElement.classList.contains(this.activeClass)) {
			targetElement.classList.remove(this.activeClass);
			targetElement.style.maxHeight = "0";
		} else {
			targetElement.classList.add(this.activeClass);
			targetElement.style.maxHeight = targetElement.scrollHeight + "px";
		}
	}
}
