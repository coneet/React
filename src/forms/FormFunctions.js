import React from 'react';
function changeHandler(event) {
    this.setState({
        inputValue: event.target.value,
        focus: true
    }, () => {
        this.props.updateState(this.state.inputValue, this.props.name);
    })
}


function blurElement(event) {
    this.setState({
        inputValue: event.target.value.trim(),
        focus: true
    })
}

const MessageFlash = (props) => {
    return <p className="text-danger">{props.message}</p>
}

export { changeHandler, blurElement, MessageFlash }