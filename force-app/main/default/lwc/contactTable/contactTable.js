import { LightningElement } from 'lwc';

export default class ContactTable extends LightningElement {
    inputField = '';

    handleKey(event) {
        if (event.keyCode === 13) {
            this.handleClick();
        }
    }

    handleClick() {
        this.inputField = this.template.querySelector('.inputFilter').value;
    }
}
