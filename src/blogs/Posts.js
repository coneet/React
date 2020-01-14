import React, { Component } from 'react'
import DashbaordComponent from '../Dashboard';

class Posts extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: null
        }
    }

    // getPosts = () => {
    //     axios.get('https://jsonplaceholder.typicode.com/posts').then(success => {
    //         
    //     }).catch(error => {

    //     })
    // }

    componentDidMount() {
        this.setState({ loading: 'h' });
        getData('https://jsonplaceholder.typicode.com/posts', (success) => {
            this.setState(prevState => {
                return { posts: success, loading: '' }
            })
        });
    }

    render() {
        return (
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Body</th>
                    </tr>
                </thead>
                {
                    <tbody>
                        {
                            this.state.posts ? this.state.posts.map((user) => {
                                return (<tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.title}</td>
                                    <td>{user.body}</td>
                                </tr>)
                            }) : <tr><td colSpan="4">No Records Found</td></tr>
                        }
                    </tbody>}
            </table>


        )
    }
}

async function getData(url, callback) {
    var response = await fetch(url);
    callback(await response.json());
}

export default DashbaordComponent(Posts, 'Blogs');