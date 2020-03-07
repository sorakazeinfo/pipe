export default class Tab {
	constructor() {
		this.id = "tab";
		this.tabs = [];
	}

	initialize() {
		const tabs = document.querySelectorAll(`[data-pipejs=${this.id}]`);
		if (tabs.length > 0) {
			tabs.forEach(tab => {
				this.tabs.push(new TabContainer(tab));
			});

			this.tabs.forEach(tab => tab.initialize());
		}
	}
}

class TabContainer {
	constructor(tab) {
		this.rootElement = tab;
		this.tabItems = [];

		this.itemElements = [];
		this.contentElements = [];
	}

	toggle(activeItemID) {
		this.tabItems.forEach(function(tabItem) {
			if (tabItem.id === activeItemID) {
				tabItem.menu.classList.add("pp-tab__menu__active");
				tabItem.content.style.display = "block";
				tabItem.visible = true;
			} else {
				tabItem.menu.classList.remove("pp-tab__menu__active");
				tabItem.content.style.display = "none";
				tabItem.visible = false;
			}
		});
	}

	initialize() {
		// Collect
		const menuItems = this.rootElement.querySelectorAll(".pp-tab__menu li");
		menuItems.forEach(item => {
			this.tabItems.push({
				id: Math.random().toString(18).slice(-8),
				menu: item,
				content: this.rootElement.querySelector(item.firstElementChild.hash),
				visible: item.classList.contains("pp-tab__menu__active")
			});
		});

		// Add EventHandler
		let activeID = null;
		this.tabItems.forEach(item => {
			item.menu.addEventListener("click", e => {
				e.preventDefault();
				this.toggle(item.id);
			});

			if (item.visible) {
				activeID = item.id;
			}
		});

		// Initial setup
		this.toggle(activeID);
	}
}
