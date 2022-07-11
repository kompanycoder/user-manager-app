import React, { Component } from "react";
import { connect } from "react-redux";
// import { getUsers } from '../actions/actions';
import { Link } from "react-router-dom";
import { getSingleUser, editUser } from "../actions/actions";
class EditUser extends Component {
  constructor(props){
    super(props);
    this.state= {
      user:{
        id:'',
        name: '',
        email:'',
        occupation:'',
        bio:''
      }
    };
  }
  componentDidMount(){
    // call dispatch with single user id here
   this.props.dispatch(getSingleUser(this.props.match.params.id)); 
  }
  componentWillReceiveProps(nextProps){
    let updateDetails = nextProps.users.user;
    // console.log(updateDetails);
    this.setState({
      user: {
        id:updateDetails.id,
        name: updateDetails.name,
        email:updateDetails.email,
        occupation: updateDetails.occupation,
        bio: updateDetails.bio
      }
    })
  }
  handleInputChange =(e, name) => {
    e.preventDefault();
    const newformdata = {
      ...this.state.user
    }
    newformdata[name] = e.target.value

    this.setState({
      user : newformdata 
    })
  };
  handleSubmit = (e) => {
    e.preventDefault();
    let  userUpdate = this.state.user;
    let userId = this.state.user.id;

    // console.log(userUpdate);
    this.props.dispatch(editUser(userId, userUpdate));
    // remember to reroute user back to home page
    this.props.history.push(`/`); 

  };
  render() {
    // console.log(this.props);
    return (
      <div className="row">
        <Link className="btn btn-outline-info right-most-btn" to="/">
          Back
        </Link>
        <div className="container">
        <h4 className="text-left">Edit User</h4>
        
        <div className="col-md-10">
          <div className="form-label-group">
              <label htmlFor="inputName">Name</label>
              <input type="email" name="email" id="inputName" className="form-control" placeholder="Full name" required="" autoFocus="" onChange={(e)=>this.handleInputChange(e, 'name')} value={this.state.user.name} />

            </div>
            <div className="form-label-group">
              <label htmlFor="inputEmail">Email address</label>
              <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required="" autoFocus="" name="email" onChange={(e)=>this.handleInputChange(e, 'email')} value={this.state.user.email} />
              
            </div>
            <div className="form-label-group">
              <label htmlFor="inputOccupation">Occupation</label>
              <input type="email" id="inputOccupation" className="form-control" placeholder="Occupation" required="" autoFocus="" name="occupation" onChange={(e)=>this.handleInputChange(e, 'occupation')} value={this.state.user.occupation} />
              
            </div>
            <div className="form-label-group">
              <label htmlFor="inputBio">Bio</label>
              <textarea type="email" id="inputBio" className="form-control" rows="8" placeholder="Your Bio" required="" autoFocus="" name="bio" onChange={(e)=>this.handleInputChange(e, 'bio')} value={this.state.user.bio} ></textarea>
              
            </div>
            <button className="btn btn-block btn-outline-success mt-4" onClick={(e)=>this.handleSubmit(e)}>Submit</button>
        </div>
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
