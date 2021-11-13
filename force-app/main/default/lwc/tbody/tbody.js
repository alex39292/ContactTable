import { LightningElement, api, track, wire } from "lwc";
import { NavigationMixin } from "lightning/navigation";
import getContacts from "@salesforce/apex/ContactController.getContacts";

export default class Tbody extends NavigationMixin(LightningElement) {
	@track
	records;
	@track
	error;

	@wire(getContacts)
	getContacts({ data, error }) {
		if (data) {
			this.records = data.map((elem) => {
				return {
					Id: elem.Id,
					AccountId:
						elem.Account !== undefined ? elem.Account.Id : null,
					AccountName:
						elem.Account !== undefined ? elem.Account.Name : null,
					FirstName: elem.FirstName,
					LastName: elem.LastName,
					Email: elem.Email,
					MobilePhone: elem.MobilePhone,
					CreatedDate: elem.CreatedDate
				};
			});
		} else {
			this.error = error;
		}
	}

	// Отправлять запрос на сервер без фильтров - очень плохо. Если такое использовать в проектах, то каждый запрос ради
	// одного контакта будет запрашивать с сервера весь список что рано или поздно приведет к лимитам:
	// https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_gov_limits.htm
	// Лучше сразу запрашивать с сервера отфильтрованные данные с помощью [WHERE имя поля := или LIKE "значение"]
	// Для того чтобы указать примерное значение используется символ %

	viewRecord(event) {
		this[NavigationMixin.Navigate]({
			type: "standard__recordPage",
			attributes: {
				recordId: event.target.value,
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
			tr.forEach((value, index) => {
				const td =
					this.template.querySelectorAll(".name")[index].textContent;
				if (!td.includes(inputField)) {
					tr[index].style.display = "none";
				} else {
					tr[index].style.display = "";
				}
			});
		}
	}
}
