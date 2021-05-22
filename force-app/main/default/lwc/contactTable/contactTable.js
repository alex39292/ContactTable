import { LightningElement, wire } from "lwc";
import { NavigationMixin } from "lightning/navigation";
import getContacts from "@salesforce/apex/ContactController.getContacts";

export default class ContactTable extends NavigationMixin(LightningElement) {
  records;
  contactUrl;

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
