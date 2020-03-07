export default class Scroll {
	constructor() {
		this.id = "scroll";
	}

	initialize() {
		const scrollTriggers = document.querySelectorAll(`[data-pipejs=${this.id}]`);
		if (scrollTriggers.length > 0) {
			scrollTriggers.forEach(trigger => {
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
						block: block
					});
				});
			});
		}
	}
}
