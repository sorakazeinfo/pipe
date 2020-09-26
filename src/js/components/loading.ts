import AppComponent from "../base/AppComponent";
import ComponentInterface from "../base/ComponentInterface";

export default class Loading extends AppComponent implements ComponentInterface {
	protected id: string = "loading";

	public initialize(): void {
		const triggerElements: NodeListOf<HTMLElement> = this.getTriggerElements();

		triggerElements.forEach((triggerElement: HTMLElement) => {
			const target: string = triggerElement.getAttribute("data-pipe-target");
			const targetElement: HTMLElement = document.querySelector(target);

			triggerElement.addEventListener("click", (e: MouseEvent) => {
				triggerElement.style.display = "none";
				targetElement.style.display = "";
			});
		});
	}
}
