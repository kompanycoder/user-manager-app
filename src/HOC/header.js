import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <div className="container-fluid">
                <Link className="usm-logo mt-4 mb-4" to="/"><h5>UMA</h5> </Link>
                {/* logo here */}
                <h2 className="text-center mt-4 mb-4 usm-title">User Management App</h2>
            </div>
        )
    }
}
