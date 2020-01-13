import React, { Component } from 'react'
import { InputEmail, InputNumber } from '../forms/Inputs'
import { Link } from 'react-router-dom'
import { Flash } from '../flash/Flash'

class ForgotPassword extends Component {
    constructor(props) {
        super(props)

        this.state = {
            status: '',
            otpProcess: {
                email: null,
                otpRecied: false,
                oneTimePassword: null,
                resetKey: null,
                from: '/forgot-password'
            }
        }

        this.formRef = React.createRef();
    }

    sendOtp = (event) => {
        event.preventDefault();
        if (this.formRef.current.checkValidity() && this.state.otpProcess.email && !this.state.otpProcess.oneTimePassword) {
            this.setState({ otpRecied: true, status: 'S', message: 'OTP sent to your registered email ID' })
        } else if (this.formRef.current.checkValidity() && this.state.otpProcess.email && this.state.otpProcess.oneTimePassword) {
            this.validateUserOtp();
        } else {
            this.setState({ status: 'F', message: 'Please Enter Required Fields' })
        }
    }

    validateUserOtp() {
        this.props.history.push({
            pathname: '/reset-password',
            state: this.state.otpProcess
        });
    }

    componentWillUnmount() {
        this.setState({ otpRecied: false })
    }


    render() {
        return (
            <div className="container">
                <Flash instance={this} status={this.state.status} />
                <div className="col-md-4 mx-auto">
                    <h2>Login</h2>
                    <form autoComplete="off" noValidate ref={this.formRef} onSubmit={this.sendOtp} method="post">
                        <div className="form-group">
                            <label htmlFor="email">Email ID</label>
                            <InputEmail
                                name="email"
                                updateState={[this, 'otpProcess']}
                                required="Please Enter Email ID"
                                placeholder="Enter Email ID"
                            />
                        </div>
                        {
                            this.state.otpRecied &&
                            <div className="form-group">
                                <label htmlFor="email">Enter OTP</label>
                                <InputNumber
                                    name="oneTimePassword"
                                    updateState={[this, 'otpProcess']}
                                    required="Enter Valid OTP"
                                    placeholder="Enter Valid OTP"
                                    min="100000"
                                    max="999999"
                                />
                            </div>
                        }
                        <button className="btn btn-info">{this.state.otpRecied ? 'Validate' : 'Submit'}</button>
                    </form>


                    <p className="text-right"><Link to="/login">Login</Link></p>
                </div>
            </div>
        )
    }
}

export default ForgotPassword
