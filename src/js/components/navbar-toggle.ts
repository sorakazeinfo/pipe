import AppComponent from "../base/AppComponent";
import ComponentInterface from "../base/ComponentInterface";

export default class NavbarToggle extends AppComponent implements ComponentInterface {
	protected id: string = "navbar-toggle";
	protected entry: string = "data-pipejs";

	public initialize(): void {
		const triggerElements: NodeListOf<HTMLElement> = this.getTriggerElements();

		triggerElements.forEach((triggerElement: HTMLElement) => {
			const groupName: string = triggerElement.getAttribute("data-pipe-navbar-group");
			const groupElements: NodeListOf<HTMLElement> = document.querySelectorAll(`[data-pipe-navbar-group=${groupName}]`);

			if (groupElements.length > 0) {
				triggerElement.addEventListener("click", function(e) {
					e.preventDefault();
					if (triggerElement.classList.contains("pp-navbar__toggle__open")) {
						groupElements.forEach((groupElement: HTMLElement) => groupElement.style.display = "block");
						triggerElement.style.display = "none";
					} else {
						groupElements.forEach((groupElement: HTMLElement) => {
							if (groupElement.classList.contains("pp-navbar__toggle__open")) {
								groupElement.style.display = "block"
							} else {
								groupElement.style.display = "none"
							}
						});
					}
				});
			}
		});
	}
}
