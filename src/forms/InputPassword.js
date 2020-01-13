import React, { Component } from 'react';
import { changeHandler, blurElement, MessageFlash } from './FormFunctions';

class InputPassword extends Component {

    constructor(props) {
        super(props)

        this.state = {
            inputValue: '',
            focus: false
        }

        this.inputRef = React.createRef();
    }

    render() {
        return (
            <>
                <input type="password"
                    name={this.props.name}
                    className={this.props.className ? this.props.className : 'form-control'}
                    placeholder={this.props.placeholder ? this.props.placeholder : ''}
                    onChange={changeHandler.bind(this)}
                    onBlur={blurElement.bind(this)}
                    value={this.state.inputValue}
                    required={this.props.required}
                    ref={this.inputRef}
                    minLength={this.props.minLength ? this.props.minLength : 0}
                    maxLength={this.props.maxLength ? this.props.maxLength : 100}
                />
                {
                    (this.props.required && this.state.focus && this.state.inputValue === '') &&
                    <MessageFlash message={this.props.required} />
                }
                {
                    (this.inputRef.current && this.inputRef.current.validity.tooShort) &&
                    <MessageFlash message={'Minimum Character Required : ' + this.props.minLength} />
                }
                {
                    (this.inputRef.current && this.inputRef.current.validity.tooLong) &&
                    <MessageFlash message={'Minimum Character Allowed : ' + this.props.maxLength} />
                }
                {
                    (this.props.confirmPassword && this.state.inputValue !== this.props.confirmPassword && this.state.inputValue !== '') &&
                    <MessageFlash message='Please enter same password as above' />
                }
            </>
        )
    }
}


export default InputPassword
