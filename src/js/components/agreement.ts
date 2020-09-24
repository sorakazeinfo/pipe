export default class Agreement {
	private id: string = "agreement";

	public initialize(): void {
		const triggers: NodeListOf<HTMLElement> = document.querySelectorAll(`[data-pipejs=${this.id}]`);

		triggers.forEach((trigger: HTMLElement) => {
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
