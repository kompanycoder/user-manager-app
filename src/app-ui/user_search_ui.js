import React from 'react';

export default function UserFound(props) {
    // console.log(props);
    return (
        <div className="container-fluid p-3">
            <div className="card p-3">
                <div className="row">
                    <div className=" col-12">
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
}
