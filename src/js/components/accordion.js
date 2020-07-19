export default class Accordion {
	constructor() {
		this.id = "accordion";
		this.activeClass = "pipejs-accordion-active";
	}

	initialize() {
		const triggers = document.querySelectorAll(`[data-pipejs=${this.id}]`);

		if (triggers.length > 0) {
			triggers.forEach(trigger => {
				trigger.addEventListener("click", e => {
					e.preventDefault();

					const target = trigger.getAttribute("data-pipe-target");
					if (target !== null) {
						const targetElement = document.querySelector(target);

						if (targetElement.classList.contains(this.activeClass)) {
							targetElement.classList.remove(this.activeClass);
							targetElement.style.maxHeight = 0;
						} else {
							targetElement.classList.add(this.activeClass);
							targetElement.style.maxHeight = targetElement.scrollHeight + "px";
						}
					}
				});
			});
		}
	}
}
