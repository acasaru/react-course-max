import React from 'react'

const Validation= (props)=>{
    let length = props.length;
    let message = (length<5)?
        <p>Text is too short</p>:
        <p>Text is too long</p>
        
    return message;
}

export default Validation