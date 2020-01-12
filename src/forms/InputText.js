import React, { Component } from 'react';
import { changeHandler, blurElement, MessageFlash } from './FormFunctions';

class InputText extends Component {

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
                <input type="text"
                    name={this.props.name}
                    className={this.props.className ? this.props.className : 'form-control'}
                    placeholder={this.props.placeholder ? this.props.placeholder : ''}
                    onChange={changeHandler.bind(this)}
                    onBlur={blurElement.bind(this)}
                    value={this.state.inputValue}
                    required={this.props.required}
                    ref={this.inputRef}
                    minLength={this.props.minLength ? this.props.minLength : 0}
                    maxLength={this.props.maxLength ? this.props.maxLength : 8}
                    autoComplete="off"
                />
                {
                    (this.props.required && this.state.focus && this.state.inputValue === '') &&
                    <MessageFlash message={this.props.required} />
                }
                {
                    (this.props.required && this.inputRef.current && this.inputRef.current.validity.tooShort) &&
                    <MessageFlash message={'Minimum Character Required : ' + this.props.minLength} />
                }
                {
                    (this.props.required && this.inputRef.current && this.inputRef.current.validity.tooLong) &&
                    <MessageFlash message={'Minimum Character Allowed : ' + this.props.maxLength} />
                }
            </>
        )
    }
}


export default InputText
