import React from 'react'
import { Link } from 'react-router-dom';

const UserUi = (props) => {
    console.log(props);
    return (
        <div className="container">
            <div className="card mt-2 col-md p-3">
                    <div className="col-md card-btn">
                        <Link to={`/users/${props.id}`} className="btn btn-sm btn-outline-primary">Edit</Link>
                    </div>
                <div className="row">
                    <div className=" col-md text-left pt-1">
                        <h6 className="text">Name: {props.name}</h6>
                        <p className="text">Email: {props.email}</p>
                        <p className="text">Occupation: {props.occupation}</p>
                        
                    </div>
                    <div className="col-12 text-justify">
                        <h6 className="primary text-success">Bio :</h6>
                            <p className="pl-1 text-info text-capitalize">{props.bio}</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default UserUi;
