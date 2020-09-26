import AppComponent from "../base/AppComponent";
import ComponentInterface from "../base/ComponentInterface";

export default class Snackbar extends AppComponent implements ComponentInterface {
	protected id: string = "snackbar";

	public initialize(): void {
		const triggerElements: NodeListOf<HTMLElement> = this.getTriggerElements();

		triggerElements.forEach(trigger => {
			const target: string = trigger.getAttribute("data-pipe-target");
			const targetElement: HTMLElement = document.querySelector(target);
			const hiddenTime: number = parseInt(trigger.getAttribute("data-pipe-hidden-time"));

			if (targetElement !== null) {
				trigger.addEventListener("click", e => {
					e.preventDefault();
					targetElement.classList.add("pp-snackbar--active");

					if (isFinite(hiddenTime)) {
						setTimeout(() => {
							targetElement.classList.remove("pp-snackbar--active");
						}, hiddenTime);
					}
				});

				const targetElementCloser = targetElement.querySelector("a");
				if (targetElementCloser !== null) {
					targetElementCloser.addEventListener("click", (e: Event) => {
						e.preventDefault();
						targetElement.classList.remove("pp-snackbar--active");
					});
				}
			}
		});
	}
}
