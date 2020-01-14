import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import DashbaordComponent from '../Dashboard';

class Home extends Component {
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
            <h1>Welcome To User Dashboard</h1>

        )
    }
}

export default DashbaordComponent(Home, 'Welcome Dashbaord');