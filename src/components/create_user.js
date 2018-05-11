import React, {Component} from 'react';
import { connect } from 'react-redux';
import { createUser } from '../actions';

class CreateUser extends Component {
  render() {
    return (
      <button className="btn btn-primary" onClick={this.onCreateUserClick}>
        Stwórz użytkownika
      </button>
    );
  }
}

export default CreateUser
