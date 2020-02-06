import React from 'react'
import { Link } from 'react-router-dom';

const UserUi = (props) => {
    // console.log(props);
    return (
        <div className="container">
            <div className="card mt-2 col-12">
                    <div className="col-4 card-btn">
                        <Link to={`/users/${props.id}`} className="btn btn-block btn-outline-primary">Edit</Link>
                    </div>
                <div className="row">
                    <div className=" col-11 text-left pt-1">
                        <h6 className="pl-1">Name: {props.name}</h6>
                        <h6 className="pl-1">Email: {props.email}</h6>
                        <h6 className="pl-1">Occupation: {props.occupation}</h6>
                        
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
