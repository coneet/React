import React from 'react';
function changeHandler(event) {
    this.setState({
        inputValue: event.target.value,
        focus: true
    }, () => {
        if (this.props.updateState.length > 1) {
            this.props.updateState[0].setState((prev) => {
                prev[this.props.updateState[1]][this.props.name] = this.state.inputValue;
            })
        }

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