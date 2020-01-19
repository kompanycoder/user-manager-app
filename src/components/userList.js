import React, { Component } from "react";
import { connect } from "react-redux";
import { getUsers } from "../actions/actions";
import { Link } from "react-router-dom";
class UserList extends Component {
  componentDidMount() {
    // call dispatch to get props with data here
    this.props.dispatch(getUsers());
  }
    showUsers = (users) =>(
        console.log(users)
    )
  render(props) {
    // console.log(this.props.users);
    let usersFound = this.props.users;
    return (
      <div className="container">
        <h4>Users Display </h4> <Link className="btn btn-info" to="/add">Add User</Link>
        <div className="container">{this.showUsers(usersFound)}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users
  };
}
export default connect(mapStateToProps)(UserList);
