import AppComponent from "../base/AppComponent";
import ComponentInterface from "../base/ComponentInterface";

export default class Appearance extends AppComponent implements ComponentInterface {
	protected id: string = "appearance";

	public initialize(): void {
		const triggerElements: NodeListOf<HTMLElement> = this.getTriggerElements();
		const htmlTag: HTMLElement = document.querySelector("html");

		triggerElements.forEach((triggerElement: HTMLElement) => {
				triggerElement.addEventListener("click", (e: Event) => {
					e.preventDefault();

					if (htmlTag.classList.contains("dark")) {
						htmlTag.classList.remove("dark");
					} else {
						htmlTag.classList.add("dark");
					}
				});
		});
	}
}
