import React, { Component } from 'react'
import { connect } from "react-redux";

class userList extends Component {
    constructor(props){
        super(props);
        this.state= {};
    }
    render() {
        return (
            <div>
                userList component
            </div>
        )
    }
};

function mapStateToProps(state) {
    return {
      users: state.users
    };
  }
export default connect(mapStateToProps)(userList);
