import { LightningElement } from "lwc";

export default class ContactTable extends LightningElement {
	inputField = "";

	handleNameChange() {
		this.inputField = this.template.querySelector(".input").value;
	}
}
