import AppComponent from "../base/AppComponent";
import ComponentInterface from "../base/ComponentInterface";

export default class Tab extends AppComponent implements ComponentInterface {
	protected id: string = "tab";
	private tabs: Array<TabContainer> = [];

	public initialize(): void {
		const tabs: NodeListOf<HTMLElement> = this.getTriggerElements();

		if (tabs.length > 0) {
			tabs.forEach((tab: HTMLElement) => {
				this.tabs.push(new TabContainer(tab));
			});

			this.tabs.forEach(tab => tab.initialize());
		}
	}
}

class TabContainer {
	private rootElement: HTMLElement;
	private tabItems: Array<any>;
	private activeClassName: string;
	private menuItemSelector: string;

	constructor(tab: HTMLElement) {
		this.rootElement = tab;
		this.tabItems = [];

		if (tab.classList.contains("pp-tab")) {
			this.activeClassName = "pp-tab__menu__active";
			this.menuItemSelector = ".pp-tab__menu li";
		} else if (tab.classList.contains("pp-tab-border")) {
			this.activeClassName = "pp-tab-border__menu__active";
			this.menuItemSelector = ".pp-tab-border__menu li";
		}
	}

	toggle(activeItemID) {
		this.tabItems.forEach((tabItem) => {
			if (tabItem.id === activeItemID) {
				tabItem.menu.classList.add(this.activeClassName);
				tabItem.content.style.display = "block";
				tabItem.visible = true;
			} else {
				tabItem.menu.classList.remove(this.activeClassName);
				tabItem.content.style.display = "none";
				tabItem.visible = false;
			}
		});
	}

	initialize() {
		// Collect
		const menuItems = this.rootElement.querySelectorAll(this.menuItemSelector);
		menuItems.forEach((item: HTMLElement) => {
			this.tabItems.push({
				id: Math.random().toString(18).slice(-8),
				menu: item,
				content: this.rootElement.querySelector((<HTMLAnchorElement>item.firstElementChild).hash),
				visible: item.classList.contains(this.activeClassName)
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
