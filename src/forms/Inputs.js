import InputEmail from './InputEmail';
import InputText from './InputText';
import InputNumber from './InputNumber';
import InputPassword from './InputPassword';
import InputSelect from './InputSelect';

function showErrors() {
    for (let x in this.formRef.current.elements) {
        if (this.formRef.current.elements[x].focus) {
            this.formRef.current.elements[x].focus();
        }
    }
}

export { InputText, InputNumber, InputEmail, InputPassword, InputSelect, showErrors };
