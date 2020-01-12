import React, { Component } from 'react';
import { changeHandler, blurElement, MessageFlash } from './FormFunctions';

class InputEmail extends Component {

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
                <input type="email"
                    name={this.props.name}
                    className={this.props.className ? this.props.className : 'form-control'}
                    placeholder={this.props.placeholder ? this.props.placeholder : ''}
                    onChange={changeHandler.bind(this)}
                    onBlur={blurElement.bind(this)}
                    value={this.state.inputValue}
                    required={this.props.required}
                    ref={this.inputRef}
                />
                {
                    (this.props.required &&
                        this.state.focus &&
                        this.state.inputValue === '') &&
                    <MessageFlash message={this.props.required} />
                }
                {
                    (this.inputRef.current && this.inputRef.current.validity.typeMismatch) &&
                    <MessageFlash message="Invalid Email ID" />
                }

            </>
        )
    }
}
//

export default InputEmail
