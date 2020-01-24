import React from 'react';

export default function UserFound(props) {
    console.log(props);
    return (
        <div>
            user found ui for search
            {props.name}
        </div>
    )
}
