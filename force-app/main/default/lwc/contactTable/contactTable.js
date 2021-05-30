import { LightningElement } from "lwc";
import { NavigationMixin } from "lightning/navigation";

export default class ContactTable extends NavigationMixin(LightningElement) {
  inputField;

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

  getName() {
    this.inputField = this.template.querySelector(".input").value;
  }

  filterByName() {
    const tr = this.template.querySelectorAll(".tr");
    if (!this.inputField || this.inputField === "") {
      tr.forEach((element) => {
        element.style.display = "";
      });
    } else {
      for (let i = 0; i < tr.length; i++) {
        const td = this.template.querySelectorAll(".name")[i].textContent;
        if (!td.includes(this.inputField)) {
          tr[i].style.display = "none";
        }
      }
    }
  }
}
