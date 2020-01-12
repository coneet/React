import React, { Component } from 'react';
import { changeHandler, blurElement, MessageFlash } from './FormFunctions';

class InputSelect extends Component {

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
                <select name={this.props.name}
                    className={this.props.className ? this.props.className : 'form-control'}
                    onChange={changeHandler.bind(this)}
                    onBlur={blurElement.bind(this)}
                    required={this.props.required}
                    ref={this.inputRef}>
                    <option value="">{this.props.placeholder ? this.props.placeholder : '--Select--'}</option>
                    {
                        this.props.children ? this.props.children : ''
                    }
                </select>
                {
                    (this.state.inputValue === '' && this.state.focus) &&
                    <MessageFlash message={this.props.required} />
                }
            </>
        )
    }
}


export default InputSelect
