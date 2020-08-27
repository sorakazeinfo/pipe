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
					this.click(targetElement, this.activeClass);
				});
			}
		});
	}

	click(targetElement: HTMLElement, activeClass: string): void {
		if (targetElement.classList.contains(activeClass)) {
			targetElement.classList.remove(activeClass);
			targetElement.style.maxHeight = "0";
		} else {
			targetElement.classList.add(activeClass);
			targetElement.style.maxHeight = targetElement.scrollHeight + "px";
		}
	}
}
