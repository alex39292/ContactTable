import { LightningElement, wire } from "lwc";
import { getListUi } from "lightning/uiListApi";
import CONTACT_OBJECT from "@salesforce/schema/Contact";

export default class ContactTable extends LightningElement {
  records;

  @wire(getListUi, {
    objectApiName: CONTACT_OBJECT,
    listViewApiName: "AllContacts"
  })
  getContacts({ data, error }) {
    if (data) {
      this.records = data.records.records;
    } else {
      this.error = error;
    }
  }
}
