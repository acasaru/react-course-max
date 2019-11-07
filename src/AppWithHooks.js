import React from 'react';
import {useState} from 'react';
import './App.css';
import Person from './Person/Person'

const App = () => {
    const[personState, setPersonState] = useState({
        persons:[
            {name:'Teo', age:10},
            {name:'Grace', age:20},
            {name:'Theo', age:30}]
        }
    )
    const switchNameHandler =()=>{
        setPersonState({
          persons:[
            {name:'Teodora', age:10},
            {name:'Grace', age:20},
            {name:'Theo', age:30}],
        });

        setOtherState("other value updated")
    }

    const [otherState, setOtherState] = useState("other value")


    return (
        <div className = "App">
            <h1>Hi, I'm a React App</h1>
            <h2>{otherState}</h2>
            <button onClick={switchNameHandler}>Switch name</button>
            <Person name={personState.persons[0].name} age={personState.persons[0].age}/>
            <Person name={personState.persons[1].name} age = {personState.persons[1].age}/>
            <Person name={personState.persons[2].name} age= {personState.persons[2].age}/>
        </div>
        );
    
}

export default App;