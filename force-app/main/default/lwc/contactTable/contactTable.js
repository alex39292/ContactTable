import { LightningElement, api } from "lwc";

export default class ContactTable extends LightningElement {
  inputField;
  trLength;

  getName() {
    this.inputField = this.template.querySelector(".input").value;
  }

  @api
  filterByName() {
    const tr = this.template.querySelectorAll(".table-tr-body");
    this.trLength = tr.length;
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
