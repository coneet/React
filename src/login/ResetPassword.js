import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { InputPassword, showErrors } from '../forms/Inputs'
import { Flash } from '../flash/Flash'

class ResetPassword extends Component {

    constructor(props) {
        super(props)
        this.state = {
            login: {},
            directAccess: true,
            status: '',
            forminput: {
                'password': ''
            }
        }
        this.formRef = React.createRef();
    }

    resetPassword = (event) => {
        showErrors.call(this);
        if (this.formRef.current.checkValidity() && this.state.password === this.state.confirmPassword) {
            this.setState({ status: 'S' })
        } else {
            this.setState({ status: 'F' })
        }
        event.preventDefault();
    }


    render() {
        return (
            <div className="container">
                <Flash status={this.state.status} />
                <div className="col-md-4 mx-auto">
                    <h2>Login</h2>
                    <form autoComplete="off" noValidate ref={this.formRef} onSubmit={this.resetPassword} method="post">
                        <div className="form-group">
                            <label htmlFor="password">Enter Password</label>
                            <InputPassword
                                name="password"
                                updateState={[this, 'forminput']}
                                required="Enter Password"
                                placeholder="Enter Password"
                                minLength="5"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Confirm Password</label>
                            <InputPassword
                                name="password"
                                updateState={[this, 'forminput']}
                                required="Re-Enter Passowrd"
                                placeholder="Re-Enter Password"
                                confirmPassword={this.state.password}
                                minLength="5"
                            />
                        </div>
                        <button className="btn btn-info">Reset</button>
                        <p className="text-right">
                            <Link to="/login">Login</Link>
                        </p>
                    </form>
                </div>
            </div>
        )
    }
    componentDidMount() {
        if (!this.props.history.location.state ||
            this.props.history.location.state.from !== '/forgot-password') {
            this.props.history.push('/login');
        }
    }
}

export default ResetPassword
