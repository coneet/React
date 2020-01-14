import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { InputPassword, InputEmail, showErrors, InputText } from '../forms/Inputs'
import { Flash } from '../flash/Flash'
import axios from 'axios'

class Register extends Component {

    constructor(props) {
        super(props)
        this.state = {
            login: {},
            status: '',
            formvalue: {
                name: '',
                email: '',
                password: ''
            }
        }
        this.formRef = React.createRef();
    }


    registerUser = (event) => {
        if (this.formRef.current.checkValidity() && this.state.password === this.state.confirmPassword) {
            axios.post('api/register', this.state.formvalue).then(() => {
                this.setState({ status: 'S', message : 'Thanks for your registraion' });
                this.formRef.current.reset();
            }).catch(() => {
                this.setState({ status: 'F', message : 'Duplicate Entry, Try Again' });
            })
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
                    <h2>Register</h2>
                    <form autoComplete="off" noValidate ref={this.formRef} onSubmit={this.registerUser} method="post">
                        <div className="form-group">
                            <label htmlFor="name">Full Name</label>
                            <InputText
                                name="name"
                                updateState={[this, 'formvalue']}
                                required="Required"
                                placeholder="Enter Fullname"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email ID</label>
                            <InputEmail
                                name="email"
                                updateState={[this, 'formvalue']}
                                required="Required"
                                placeholder="Enter Email"
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
                        <button className="btn btn-info">Register</button>
                        <p className="text-right"><Link to="/login">Login</Link></p>
                    </form>
                </div>
            </div>
        )
    }
}

export default Register
