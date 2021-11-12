import { LightningElement } from "lwc";

export default class ContactTable extends LightningElement {
	inputField;

	getName() {
		this.inputField = this.template.querySelector(".input").value;
	}

	filterByName() {
		this.template.querySelector("c-tbody").filterByName(this.inputField);
	}
}
