export default class Snackbar {
	private id: string = "snackbar";

	public initialize(): void {
		const triggers: NodeListOf<HTMLElement> = document.querySelectorAll(`[data-pipejs=${this.id}]`);

		triggers.forEach(trigger => {
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
