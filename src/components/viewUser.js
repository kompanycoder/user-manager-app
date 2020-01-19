import React, { Component } from 'react'
import { connect } from "react-redux";
import { getUsers } from '../actions/actions';
class ViewUser extends Component {
    componentDidMount(){
        // call dispatch to get props with data here
        this.props.dispatch(getUsers());
    }
    render() {
        console.log(this.props);
        return (
            <div className="container">
                user component for specific veiw component
                {/* not implemented but an actual possibility when items are alot... */}
            </div>
        )
    }
};

function mapStateToProps(state) {
    return {
      users: state.users
    };
  }
export default connect(mapStateToProps)(ViewUser);
