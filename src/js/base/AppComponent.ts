export default class AppComponent {
	protected id: string;
	protected entry: string = "data-pipejs";

	protected getTriggerElements(): NodeListOf<HTMLElement> {
		return document.querySelectorAll(`[${this.entry}=${this.id}]`);
	}
}
