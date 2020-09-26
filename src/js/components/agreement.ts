import AppComponent from "../base/AppComponent";
import ComponentInterface from "../base/ComponentInterface";

export default class Agreement extends AppComponent implements ComponentInterface {
	protected id: string = "agreement";

	public initialize(): void {
		const triggerElements: NodeListOf<HTMLElement> = this.getTriggerElements();

		triggerElements.forEach((trigger: HTMLElement) => {
			const target: string = trigger.getAttribute("data-pipe-target");
			const targetButton: HTMLElement = document.querySelector(target);
			const targetCheckboxes: NodeListOf<HTMLElement> = trigger.querySelectorAll("input[type=checkbox]");

			if (targetButton !== null && targetCheckboxes.length > 0) {
				trigger.setAttribute("data-pipestore-checkboxes", targetCheckboxes.length.toString());

				targetCheckboxes.forEach((targetCheckbox: HTMLInputElement) => {
					targetCheckbox.addEventListener("click", (e: Event) => {
						let count: number = parseInt(trigger.getAttribute("data-pipestore-checkboxes"));
						targetCheckbox.checked ? count-- : count++;

						trigger.setAttribute("data-pipestore-checkboxes", count.toString());

						if (count === 0) {
							targetButton.removeAttribute("disabled");
						} else {
							targetButton.setAttribute("disabled", "disabled");
						}
					});
				});
			}
		});
	}
}
