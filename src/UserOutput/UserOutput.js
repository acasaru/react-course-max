import React from 'react'

const UserOutput = (props)=>{
    return (
        <div>
            <p>This is the first paragraph - {props.userName}</p>
            <p>This is the second paragraph - {props.userName}</p>
        </div>
    );
}

export default UserOutput;