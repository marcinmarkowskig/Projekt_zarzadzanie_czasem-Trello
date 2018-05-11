import _ from 'lodash';
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getUserTables } from '../actions';

class GetUserTables extends Component {
  componentDidMount() {
    this.props.getUserTables();
  }

  onCreateUserClick() {
    return _.map(this.props.tables, table => {
         return (
           <li className="list-group-item" key={table.id}>
               {table.name}
           </li>
         );
       });
  }

  render() {
    return (
      <button className="btn btn-primary" onClick={this.onCreateUserClick}>
        Pobierz tablicę
      </button>
    );
  }
}

function mapStateToProps(state) {
  return { tables: state.tables };
}

export default connect(mapStateToProps, { getUserTables: getUserTables })(GetUserTables);
