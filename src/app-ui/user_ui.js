import React from 'react'
import { Link } from 'react-router-dom';

const UserUi = (props) => {
    console.log(props);
    return (
        <div className="row mt-3 mb-3">
            <div className=" col-8">
                <h6>Name: {props.name}</h6>
                <h6>Email: {props.email}</h6>
                <h6>Occupation: {props.occupation}</h6>
                
            </div>
            <div className="col-4">
                <Link to={`/users/${props.id}`} className="btn btn-block btn-outline-primary mb-1 ml-8">Edit</Link>
            </div>
            <div className="col-12 text-justify">
                    <p>{props.bio}</p>
            </div>
        </div>
    )
};

export default UserUi;
