import React, { Component } from 'react';
import axios from 'axios';
import stylesheet from './UsersList.scss';

class UsersList extends Component {

  constructor (props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount () {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        this.setState({
          users: response.data
        });
      })
  }

  render() {
    var users = this.state.users.map(user => (
       	<div className="user" key={user.id}>
       		<div className="name">Name: {user.name}</div>
       		<div className="email">Email: {user.email}</div>
       		<div className="phone">Phone: {user.phone}</div>
       		<div className="company">Company: {user.company.name}</div>
    		</div>
    ));
    return (
      <div>
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        <div className="list">
          {users}
        </div>
      </div>
    );
  }
}

export default UsersList;
