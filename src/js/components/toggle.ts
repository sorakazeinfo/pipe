import AppComponent from "../base/AppComponent";
import ComponentInterface from "../base/ComponentInterface";

export default class Toggle extends AppComponent implements ComponentInterface {
	protected id: string = "toggle";

	private setButtonLabel(trigger: HTMLElement, label: string): void {
		if (label !== null) {
			trigger.innerText = label;
		}
	}

	public initialize(): void {
		const triggerElements: NodeListOf<HTMLElement> = this.getTriggerElements();

		triggerElements.forEach((trigger: HTMLElement) => {
			const target: string = trigger.getAttribute("data-pipe-target");
			const targetElements: NodeListOf<HTMLElement> = document.querySelectorAll(target);
			const closeLabel: string = trigger.getAttribute("data-pipe-close-label");
			const openLabel: string = trigger.getAttribute("data-pipe-open-label");
			const hiddenClassName: string = trigger.getAttribute("data-pipe-hidden-class-name");

			if (targetElements.length > 0) {
				targetElements.forEach((targetElement: HTMLElement) => {
					if (hiddenClassName !== null) {
						trigger.addEventListener("click", (e: Event) => {
							e.preventDefault();
							if (targetElement.classList.contains(hiddenClassName)) {
								targetElement.classList.remove(hiddenClassName);
								this.setButtonLabel(trigger, closeLabel);
							} else {
								targetElement.classList.add(hiddenClassName);
								this.setButtonLabel(trigger, openLabel);
							}
						});
					} else {
						trigger.addEventListener("click", (e: Event) => {
							e.preventDefault();
							if (targetElement.style.display === "none") {
								targetElement.style.display = "";
								this.setButtonLabel(trigger, closeLabel);
							} else {
								targetElement.style.display = "none";
								this.setButtonLabel(trigger, openLabel);
							}
						});
					}
				});
			}
		});
	}
}
