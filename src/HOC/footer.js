import React, { Component } from 'react'

export default class Footer extends Component {
    getYear(){
        let currentYear = new Date().getFullYear().toString();
        return currentYear;
    }
    render() {
        return (
            <div className="container footer">
               <p className="text-center">&copy; copyright {this.getYear()}.</p>
            </div>
        )
    }
}
