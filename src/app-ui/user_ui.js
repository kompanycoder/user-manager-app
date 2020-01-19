import React from 'react'
import { Link } from 'react-router-dom';

const UserUi = (props) => {
    console.log(props);
    return (
        <div className="container">
            <div className="card p-3">
                <div className="row">
                    <div className=" col-8">
                        <h6 className="pl-1">Name: {props.name}</h6>
                        <h6 className="pl-1">Email: {props.email}</h6>
                        <h6 className="pl-1">Occupation: {props.occupation}</h6>
                        
                    </div>
                    <div className="col-4">
                        <Link to={`/users/${props.id}`} className="btn btn-block btn-outline-primary mb-1 ml-8 p-1">Edit</Link>
                    </div>
                    <div className="col-12 text-justify">
                        <h6 className="pl-1">Bio :</h6>
                            <p className="pl-1 btn-outline-primary">{props.bio}</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default UserUi;
