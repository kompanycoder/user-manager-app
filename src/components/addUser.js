import React, { Component } from "react";
import { connect } from "react-redux";
// import { getUsers } from '../actions/actions';
import { Link } from "react-router-dom";
class AddUser extends Component {
  componentDidMount() {
    // call dispatch to get props with data here
    // this.props.dispatch(getUsers());
  }
  render() {
    console.log(this.props);
    return (
      <div className="container">
        <h4>Single User Display </h4>{" "}
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
export default connect(mapStateToProps)(AddUser);
