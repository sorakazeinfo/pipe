export default class Modal {
	private id: string;

	constructor() {
		this.id = "modal";
	}

	initialize() {
		const modalTriggers = document.querySelectorAll(`[data-pipejs=${this.id}]`);
		if (modalTriggers.length > 0) {
			modalTriggers.forEach(button => {
				const id = button.getAttribute("data-pipe-target");
				const modal: HTMLElement = document.querySelector(id);

				if (modal !== null) {
					// Trigger
					button.addEventListener("click", function(e) {
						e.preventDefault();
						modal.style.display = "block";
					});

					// Overlay
					const overlay = modal.querySelector(".pp-modal__overlay");
					if (overlay !== null) {
						overlay.addEventListener("click", function(e) {
							e.preventDefault();
							modal.style.display = "none";
						});
					}

					// Close
					const overlayClose = modal.querySelector(".pp-modal__close");
					if (overlayClose !== null) {
						overlayClose.addEventListener("click", function(e) {
							e.preventDefault();
							modal.style.display = "none";
						});
					}

					// Close in contents
					const contentClose = modal.querySelector(".pp-modal__contents__close");
					if (contentClose !== null) {
						contentClose.addEventListener("click", function(e) {
							e.preventDefault();
							modal.style.display = "none";
						});
					}

					// Close Action
					const closeAction = modal.querySelector(".pp-modal__close-action");
					if (closeAction !== null) {
						closeAction.addEventListener("click", (e: Event) => {
							e.preventDefault();
							modal.style.display = "none";
						});
					}
				}
			});
		}
	}
}
