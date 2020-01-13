import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom'

class Flash extends PureComponent {

    constructor(props) {

        super(props)

        this.state = {
            display: true,
            message: '',
            status: ''
        }

        if (this.state.status !== '') {
            setTimeout(() => {
                this.setState({ status: '' });
            }, 5000);
        }

        this.flashMessageClass = {
            position: 'fixed',
            top: '0px',
            left: '0px;'
        }
    }

    static getDerivedStateFromProps(props, state) {
        if (!props.instance)
            return state;
        state.status = props.status;
        if (props.instance.state.message) {
            state.message = props.instance.state.message;
        } else {
            state.message = "";
        }

        return state;
    }

    hideFlashMessage = () => {
        if (!this.props.instance)
            return;
        this.props.instance.setState({ status: '' });
        if (this.props.instance.timeout) {
            clearTimeout(this.props.instance.timeout);
        }

    }

    render() {
        return ReactDOM.createPortal(
            (
                ((this.state.status === 'S') ?
                    <div onClick={this.hideFlashMessage} className={'alert alert-success position-fixed' + this.flashMessageClass}>
                        {
                            this.state.message ? this.state.message : <span>your request completed successfully, Thanks for using our services.</span>
                        }
                        <span className="float-right text-danger">X</span>
                    </div> :
                    (this.state.status === 'F') ? (<div onClick={this.hideFlashMessage} className={'alert alert-danger position-fixed' + this.flashMessageClass}>
                        {
                            this.state.message ? this.state.message : <span>Unable to perform your action successfully, Please try again!</span>
                        }
                        <span className="float-right text-danger">X</span>
                    </div>) : '')),
            document.getElementById('flash-message')
        );


    }

    componentDidUpdate() {
        console.log(new Date())
        if (!this.props.instance)
            return;
        if (this.props.instance.timeout !== null) {
            clearTimeout(this.props.instance.timeout);
            this.props.instance.timeout = null;
        }
        this.props.instance.timeout = setTimeout(() => {
            this.props.instance.setState({ status: '' });
            if (this.props.instance.timeout !== null) {
                clearTimeout(this.props.instance.timeout);
                this.props.instance.timeout = null;
            }
        }, 5000);
    }

    componentWillUnmount() {
        if (!this.props.instance)
            return;
        if (this.props.instance.timeout && this.props.instance.timeout) {
            clearTimeout(this.props.instance.timeout);
        }
    }
}
export { Flash }