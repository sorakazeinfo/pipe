import AppComponent from "../base/AppComponent";
import ComponentInterface from "../base/ComponentInterface";

export default class ToScroll extends AppComponent implements ComponentInterface {
	protected id: string = "scroll_";

	public initialize(): void {
		const triggerElements: NodeListOf<HTMLElement> = this.getTriggerElements();

		triggerElements.forEach(trigger => {
			const href  = trigger.getAttribute("href");
			const block = trigger.getAttribute("data-pipe-target") || "start";

			if (href !== null && document.querySelector(href) === null) {
				return;
			}

			const destinationElement = document.querySelector(href) || document.getElementsByTagName("body")[0];

			trigger.addEventListener("click", function(e) {
				e.preventDefault();
				destinationElement.scrollIntoView({
					behavior: "smooth",
					block: "start"
				});
			});
		});
	}
}
