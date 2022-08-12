import React from 'react';

export default function UserFound(props) {
    // console.log(props);
    return (
            <div className="card p-3">
                <div className="col">
                        <div className=" col-md text-left pt-1">
                            <h6 className="text">Name: {props.name}</h6>
                            <p className="text">Email: {props.email}</p>
                            <p className="text">Occupation: {props.occupation}</p>
                            
                        </div>
                        <div className="col-md text-justify">
                            <h6 className="primary text-success">Bio :</h6>
                                <p className="pl-1 text-info text-capitalize">{props.bio}</p>
                        </div>
                </div>
            </div>
    )
}
