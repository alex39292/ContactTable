import { LightningElement, wire } from "lwc";
import getContacts from "@salesforce/apex/ContactController.getContacts";
import { NavigationMixin } from "lightning/navigation";

export default class Tbody extends NavigationMixin(LightningElement) {
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

  viewRecord(event) {
    this[NavigationMixin.Navigate]({
      type: "standard__recordPage",
      attributes: {
        recordId: event.target.label,
        objectApiName: "Account",
        actionName: "view"
      }
    });
  }
}
