import { createElement } from "lwc";
import ContactTable from "c/contactTable";
import getContacts from "@salesforce/apex/ContactController.getContacts";
import { registerLdsTestWireAdapter } from "@salesforce/sfdx-lwc-jest";

const mockGetRecord = require("./data/contacts.json");
const getRecordAdapter = registerLdsTestWireAdapter(getContacts);

describe("Test ContactTable", () => {
  afterEach(() => {
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  describe("getContacts @wire data", () => {
    it("renders Contact table", () => {
      const element = createElement("c-contact_table", {
        is: ContactTable
      });
      document.body.appendChild(element);
      getRecordAdapter.emit(mockGetRecord);

      return Promise.resolve().then(() => {
        const firstNameElement = element.shadowRoot.querySelector("div");
        expect(firstNameElement.textContent).toBe(
          "First Name: " + mockGetRecord.fields.FirstName.value
        );
      });
    });
  });
});
