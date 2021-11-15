import { LightningElement, api, wire } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import getContacts from '@salesforce/apex/ContactController.getContacts';

export default class Tbody extends NavigationMixin(LightningElement) {
    @api
    inputField;

    records;
    error;

    @wire(getContacts, { name: '$inputField' })
    getContacts({ data, error }) {
        if (data) {
            this.records = data.map(elem => {
                return {
                    Id: elem.Id,
                    AccountId: elem.Account !== undefined ? elem.Account.Id : null,
                    AccountName: elem.Account !== undefined ? elem.Account.Name : null,
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

    viewRecord(event) {
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: event.target.value,
                objectApiName: 'Account',
                actionName: 'view'
            }
        });
    }
}
