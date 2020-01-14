import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import DashbaordComponent from '../Dashboard';

class Users extends Component {
    constructor(props) {
        super(props)

        this.state = {
            users: null,
            loading: ''
        }
    }

    getUsers = () => {
        this.setState({ loading: 'h' });
        axios.get('https://jsonplaceholder.typicode.com/users').then(success => {
            this.setState(prevState => {
                return { users: success.data, loading: '' }
            })
        }).catch(error => {

        })
    }

    componentDidMount() {
        this.getUsers();
    }

    render() {
        return (


            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Username</th>
                        <th>Display Name</th>
                        <th>Email ID</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.users && this.state.users.map((user) => {
                            return <tr key={user.id}>
                                <td>
                                    {user.id}
                                </td>
                                <td>
                                    <Link to={'/profile/' + user.id}>{user.username}</Link>
                                </td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>


        )
    }
}

export default DashbaordComponent(Users, 'User List');