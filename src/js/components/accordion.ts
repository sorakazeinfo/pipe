import AppComponent from "../base/AppComponent";
import ComponentInterface from "../base/ComponentInterface";

export default class Accordion extends AppComponent implements ComponentInterface {
	protected id: string = "accordion";
	private activeClass: string = "pipejs-accordion-active";

	public initialize(): void {
		const triggerElements: NodeListOf<HTMLElement> = this.getTriggerElements();

		triggerElements.forEach(trigger => {
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
