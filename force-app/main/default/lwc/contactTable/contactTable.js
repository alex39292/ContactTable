import { LightningElement } from "lwc";

export default class ContactTable extends LightningElement {
  inputField;

  getName() {
    this.inputField = this.template.querySelector(".input").value;
  }

  filterByName() {
    const tr = this.template.querySelectorAll(".table-tr");
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
