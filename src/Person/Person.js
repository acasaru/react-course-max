import React from 'react';

const Person = (props)=>{
    return (
        <p> I'm a person {props.name} and I am {props.age}! </p>
    );
};

export default Person;