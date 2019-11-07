import React from 'react'


const UserInput=(props)=>{
    return (
        <input onChange= {props.changeEventHandler} value={props.username}></input>
    )
}

export default UserInput;