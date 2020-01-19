import React, { Component } from "react";
import { connect } from "react-redux";
// import { getUsers } from '../actions/actions';
import { Link } from "react-router-dom";
class EditUser extends Component {
  constructor(props){
    super(props);
    this.state= {
      user:{
        name: '',
        email:'',
        occupation:'',
        bio:''
      }
    };
  }
  render() {
    console.log(this.props);
    return (
      <div className="container">
        <h4>Edit User</h4>{" "}
        <Link className="btn btn-info" to="/">
          Back
        </Link>
        <div className="container">User details here</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users
  };
}
export default connect(mapStateToProps)(EditUser);
