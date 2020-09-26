import AppComponent from "../base/AppComponent";
import ComponentInterface from "../base/ComponentInterface";

export default class SeeMore extends AppComponent implements ComponentInterface {
	protected id: string = "see-more";

	public initialize(): void {
		const triggerElements: NodeListOf<HTMLElement> = this.getTriggerElements();

		triggerElements.forEach((triggerElement: HTMLElement) => {
			const targetElement: HTMLElement = document.querySelector(triggerElement.getAttribute("data-pipe-target"));
			if (targetElement !== null) {
				triggerElement.addEventListener("click", (e: Event) => {
					e.preventDefault();
					targetElement.style.display = "";
					targetElement.classList.remove("pp-hidden");
					triggerElement.remove();
				});
			}
		});
	}
}
