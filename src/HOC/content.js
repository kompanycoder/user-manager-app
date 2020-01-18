import React, { Component } from 'react'
import {getUsers} from './actions/actions';

export default class Content extends Component {
    constructor(props){
        super(props);
        this.state= {
          users:[]
        }
        // this.showUsers = this.showUsers.bind(this);
      }
        showUsers() {
          getUsers().then((data)=>
            <ul>
              {
                data ? 
                data.forEach((item, i) => (
                  // console.log(item.name)
                  <li key={i}>{item.name}</li>
                ))
                : 'no items'
              }
            </ul>
          );
          
        }
    render() {
        return (
            <div>
                Content Component
            </div>
        )
    }
}
