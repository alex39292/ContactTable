import { LightningElement, wire, api } from "lwc";
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

  @api
  filterByName(inputField) {
    const tr = this.template.querySelectorAll(".table-tr-body");
    if (!inputField || inputField === "") {
      tr.forEach((element) => {
        element.style.display = "";
      });
    } else {
      for (let i = 0; i < tr.length; i++) {
        const td = this.template.querySelectorAll(".name")[i].textContent;
        if (!td.includes(inputField)) {
          tr[i].style.display = "none";
        } else {
          tr[i].style.display = "";
        }
      }
    }
  }
}
