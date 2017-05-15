import React, { Component } from 'react';
import MasterLayout from '../components/MasterLayout';
import UsersList from '../components/users/UsersList';

class Users extends Component {
  render() {
    return (
      <MasterLayout>
        <UsersList></UsersList>
      </MasterLayout>
    );
  }
}

export default Users;
