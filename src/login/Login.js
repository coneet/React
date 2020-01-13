import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { InputPassword, InputEmail, showErrors } from '../forms/Inputs'
import { Flash } from '../flash/Flash'

class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            login: {},
            status: '',
            formvalue: {
                email: '',
                password: ''
            }
        }
        this.formRef = React.createRef();
    }


    loginUser = (event) => {
        if (this.formRef.current.checkValidity() && this.state.password === this.state.confirmPassword) {
            this.setState({ status: 'S' })
        } else {
            this.setState({
                status: 'F',
                message: 'Please enter username and password'
            })
        }
        showErrors.call(this);
        event.preventDefault();
    }

    render() {
        return (
            <div className="container">
                <Flash instance={this} status={this.state.status} />
                <div className="col-md-4 mx-auto">
                    <h2>Login</h2>
                    <form autoComplete="off" noValidate ref={this.formRef} onSubmit={this.loginUser} method="post">
                        <div className="form-group">
                            <label htmlFor="email">Email ID</label>
                            <InputEmail
                                name="email"
                                updateState={[this, 'formvalue']}
                                required="Please Enter Email ID"
                                placeholder="Enter Email ID"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Enter Password</label>
                            <InputPassword
                                name="password"
                                updateState={[this, 'formvalue']}
                                required="Enter Password"
                                placeholder="Enter Password"
                                minLength="5"
                            />
                        </div>
                        <button className="btn btn-info">Login</button>
                        <p className="text-right"><Link to="/forgot-password">Need Help</Link></p>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login
