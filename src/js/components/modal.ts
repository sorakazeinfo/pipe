import AppComponent from "../base/AppComponent";
import ComponentInterface from "../base/ComponentInterface";

export default class Modal extends AppComponent implements ComponentInterface {
	protected id: string = "modal";

	public initialize(): void {
		const triggerElements: NodeListOf<HTMLElement> = this.getTriggerElements();

		triggerElements.forEach((triggerElement: HTMLElement) => {
			const modal: HTMLElement = document.querySelector(triggerElement.getAttribute("data-pipe-target"));

			if (modal !== null) {
				// Trigger
				triggerElement.addEventListener("click", function(e) {
					e.preventDefault();
					modal.style.display = "block";
				});

				// Closer actions
				const closeActionSelectors: Array<string> = [
					".pp-modal__overlay",
					".pp-modal__close",
					".pp-modal__contents__close",
					".pp-modal__close-action",
				];
				closeActionSelectors.forEach((closeActionSelector: string) => {
					const closeElement = modal.querySelector(closeActionSelector);
					if (closeElement !== null) {
						closeElement.addEventListener("click", (e: Event) => {
							e.preventDefault();
							modal.style.display = "none";
						});
					}
				});
			}
		});
	}
}
