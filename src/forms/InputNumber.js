import React, { Component } from 'react';
import { changeHandler, blurElement, MessageFlash } from './FormFunctions';

class InputNumber extends Component {

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
                <input type="number"
                    name={this.props.name}
                    className={this.props.className ? this.props.className : 'form-control'}
                    placeholder={this.props.placeholder ? this.props.placeholder : ''}
                    onChange={changeHandler.bind(this)}
                    onBlur={blurElement.bind(this)}
                    value={this.state.inputValue}
                    required={this.props.required}
                    ref={this.inputRef}
                    min={this.props.min ? this.props.min : 0}
                    max={this.props.max ? this.props.max : 999999999999999999999999999999}
                />
                {
                    (this.props.required && this.state.focus && this.state.inputValue === '') &&
                    <MessageFlash message={this.props.required} />
                }
                {
                    (this.inputRef.current && this.inputRef.current.validity.rangeUnderflow) &&
                    <MessageFlash message='Number is too short' />
                }

                {
                    (this.inputRef.current && this.inputRef.current.validity.rangeOverflow) &&
                    <MessageFlash message='Number is too large' />
                }

            </>
        )
    }
}


export default InputNumber
