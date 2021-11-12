import { LightningElement } from "lwc";

export default class ContactTable extends LightningElement {
  inputField;

  // Очень классно что ты решил сделать все вручную и особенно с тем что разобрался как отображать template с помощью стилей
  // Настрой у себя декоратор чтобы в JS отступы были по 4 пробела, а не по два (смотри в конце гайда, там есть инфа по
  // настройкам).

  getName() {
    this.inputField = this.template.querySelector(".input").value;
  }

  filterByName() {
    this.template.querySelector("c-tbody").filterByName(this.inputField);
  }
}
