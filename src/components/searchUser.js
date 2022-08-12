import React, { Component } from "react";
import { connect } from "react-redux";
import { getUsers } from "../actions/actions";
import UserSearchUi from '../app-ui/user_search_ui';
import { Link } from "react-router-dom";

class SearchUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
          searchTerm: '',
          searching: false,
          users: [],
          filtered: []
        };
      }
  componentDidMount() {
    // call dispatch to get props with data here
    this.props.dispatch(getUsers());
    // let usersFound = this.props.users.users;
    // this.setState({
    //     users: usersFound
    // })
  }
  componentWillReceiveProps(nextProps){
    let newusers = nextProps.users.users;
    // console.log(newusers);
    this.setState({
      users: newusers 
    });
    // console.log(this.state.users);
  }
  // user search fuctionality
  searchTerm(e){
    e.preventDefault();
    this.setState({ searching: true });
    let searchName = e.target.value;
    // console.log(searchName);
    
    this.setState({
      searchTerm: searchName
    });
  }

  findUser(e) {
    e.preventDefault();
    let searchName = this.state.searchTerm.toLowerCase();
    let userList = this.state.users;
    // console.log(userList);
    // console.log(searchName);
    //  filter functinality 

    // eslint-disable-next-line array-callback-return
    let results = userList.filter((user) => {
      // console.log(user);
      // username to lowercase before omparing with searchterm
      let userName = user.name.toLowerCase();
      // console.log(userName);
      let match;
      // console.log(newArr);
      if(userName.includes(searchName)){
          // console.log(user);
           match= user;
          // console.log(match);
          return match;
      }
      // return match; done in clause logic above.
    });
    
    // console.log(results);
    this.setState({
      filtered: results
    })

    
  };
  renderUsers =(renderList)=> (
    // console.log(this.state.filtered);
    renderList ?
      renderList.map((user, i)=>(
      <UserSearchUi key={i} {...user} />
    )) : "No items to Render"
    
  )

  render() {
    // console.log(this.state.users);
    // let usersFound = this.props.users.users;
    return (
      <div className="container">
       <div className="col text-center">
       <h6 className="text-center">Who are you trying to find?</h6> <Link className="btn btn-outline-info right-most-btn" to="/">
          Back
        </Link>
       </div>
        
        <div className="row-md mt-4">
            <form
            className="form-inline"
            onSubmit={(e) =>this.findUser(e)}
            >
            <div className="input-group">
              <input
                  name="search"
                  className="form-control"
                  placeholder="Search user by name"
                  onChange={e => this.searchTerm(e)}
                  type="text"
                  defaultValue={this.state.searchTerm}
              />{" "}
              <button className="btn btn-light" type="submit">
                  Search
              </button>
            </div>
            </form>
            <div className="col mt-4 row-margin">
                {this.state.searching ? this.renderUsers(this.state.filtered): "Search for user.."}
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
export default connect(mapStateToProps)(SearchUser);
