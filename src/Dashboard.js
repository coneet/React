import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

const DashbaordComponent = (Orignal, heading) => {
    class Dashbaord extends Component {
        constructor(props) {
            super(props)

            this.state = {

            }

            if (!localStorage.getItem('_token')) {
                this.props.history.push('/login');
            }

        }

        render() {
            return (
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-2">
                            <ul className="nav nav-pills flex-column">
                                <li className="nav-item">
                                    <NavLink exact activeClassName="active" className="nav-link" to="/admin">Dashboard</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink activeClassName="active" className="nav-link" to="/admin/users">Users</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink activeClassName="active" className="nav-link" to="/admin/posts">Posts</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink activeClassName="active" className="nav-link" to="/c">Disabled</NavLink>
                                </li>
                            </ul>
                            <hr className="d-sm-none" />
                        </div>
                        <div className="col-sm-10">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h4>{heading}</h4>
                                </div>
                                <div className="panel-body">
                                    <Orignal />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }

    return Dashbaord
}



export default DashbaordComponent
