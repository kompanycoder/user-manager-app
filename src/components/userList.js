import React, { Component } from "react";
import { connect } from "react-redux";
import { getUsers } from "../actions/actions";
// import { Link } from "react-router-dom";
import UserUi from '../app-ui/user_ui';
class UserList extends Component {
  componentDidMount() {
    // call dispatch to get props with data here
    this.props.dispatch(getUsers());
  }
    showUsers = (users) =>(
      // console.log(users)

        users ? users.map((item, i)=>(
        <UserUi key={i} {...item} />
          // console.log(item)
        )): 'No Items Loaded...'
    )
  render(props) {
    // console.log(this.props);
    let usersFound = this.props.users.users;
    
    return (
      <div className="container row">
        <h4 className="col-md-12 mt-4 mb-4 text-center">Users Dashboard Display </h4> 
        {/* link to add user component. but the backend does not support adding of new user. Tested this.. */}
        {/* <Link className="btn btn-outline-info ml-4" to="/add">Add User</Link> */}
        <div className="container col-md-12 text-center">{this.showUsers(usersFound)}</div>
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
