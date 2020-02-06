import React from 'react';

export default function UserFound(props) {
    // console.log(props);
    return (
        <div className="container-fluid p-3">
            <div className="card p-3">
                <div className="row">
                        <div className=" col-11 text-left pt-1">
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
}
