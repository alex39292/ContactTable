import { LightningElement } from 'lwc';

export default class ContactTable extends LightningElement {
    inputField = '';

    handleNameChange(event) {
        this.inputField = event.target.value;
    }
}
