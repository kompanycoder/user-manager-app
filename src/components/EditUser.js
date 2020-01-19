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
  compponentDidMount(){
    // call dispatch with single user id here
    
  }
  handleInputChange =(e) => {
    e.preventDefault();
  };
  handleSubmit = (e) => {
    e.preventDefault();
    let  userUpdate = this.state.user;
    console.log(userUpdate);
  };
  render() {
    console.log(this.props);
    return (
      <div className="container row">
        <h4>Edit User</h4>{" "}
        <Link className="btn btn-outline-info ml-5" to="/">
          Back
        </Link>
        <div className="col-md-10 mt-4">
          <div className="form-label-group">
              <label htmlFor="inputName">Name</label>
              <input type="email" id="inputName" className="form-control" placeholder="Full name" required="" autoFocus="" onChange={(e)=>this.handleInputChange(e)} value={this.state.user.name} />

            </div>
            <div className="form-label-group">
              <label htmlFor="inputEmail">Email address</label>
              <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required="" autoFocus="" onChange={(e)=>this.handleInputChange(e)} value={this.state.user.email} />
              
            </div>
            <div className="form-label-group">
              <label htmlFor="inputOccupation">Occupation</label>
              <input type="email" id="inputOccupation" className="form-control" placeholder="Occupation" required="" autoFocus="" onChange={(e)=>this.handleInputChange(e)} value={this.state.user.occupation} />
              
            </div>
            <div className="form-label-group">
              <label htmlFor="inputBio">Bio</label>
              <textarea type="email" id="inputBio" className="form-control" rows="8" placeholder="Your Bio" required="" autoFocus="" onChange={(e)=>this.handleInputChange(e)} value={this.state.user.bio} ></textarea>
              
            </div>
            <button className="btn btn-block btn-outline-success mt-4" onClick={(e)=>this.handleSubmit(e)}>Edit</button>
        </div>
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
