import { LightningElement } from 'lwc';

export default class ContactTable extends LightningElement {
    inputField = '';

    handleClick() {
        this.inputField = this.template.querySelector('.inputFilter').value;
    }
}
