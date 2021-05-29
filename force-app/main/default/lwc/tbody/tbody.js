import { LightningElement, wire } from "lwc";
import getContacts from "@salesforce/apex/ContactController.getContacts";

export default class Tbody extends LightningElement {
  records;
  error;

  @wire(getContacts)
  getContacts({ data, error }) {
    if (data) {
      this.records = data;
    } else {
      this.error = error;
    }
  }
}
