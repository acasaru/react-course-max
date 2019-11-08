import React from 'react';
import {Component} from 'react';
import './App.css';
import PersonWithStyle from './Person/PersonWithStyle'
import styled from 'styled-components'

const StyledButton = styled.button`
    background-color: white;
    font: inherit;
    border:1px solid blue;
    padding: 8px;
    margin: 5px;

    &:hover {
        background-color:lightgreen;
        color: black;
    }
    `
class App2 extends Component {
    state={
      persons:[
        {id:"1", name:'Teo', age:10},
        {id:"2", name:'Grace', age:20},
        {id:"3", name:'Theo', age:13}
      ],
      userName:"Teo",
      showPersons: false,
    }

    togglePersonsHandler =() => {
        this.setState({
          showPersons:!this.state.showPersons
        });
    }

    deletePersonsHandler = (index)=>{
        const persons = [...this.state.persons];     //immutable state
        persons.splice(index,1);
        this.setState({persons:persons})
    }

    nameChangeHandler = (event, id) =>{
        const personIndex = this.state.persons.findIndex(p=> {return p.id === id});
        const person = {...this.state.persons[personIndex]};
        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;
    
        this.setState({persons:persons})
    }

    render(){
        let persons = null;
        if(this.state.showPersons){
          persons = (
            <div>
              {this.state.persons.map((person, index)=>{
                return (
                <PersonWithStyle 
                    name={person.name} 
                    age={person.age}
                    key={person.id} 
                    click={this.deletePersonsHandler.bind(this,index)} 
                    changed={(event) => this.nameChangeHandler(event, person.id)}/>
                );
              })}
            </div>
          )
        }
        return (
          <div className = "App">
            <h1>Hi, I'm a React App</h1>
            <StyledButton onClick={this.switchNameHandler}>Switch name</StyledButton>
            <button onClick={this.togglePersonsHandler}>Persons</button>
            {persons}
        </div>);
    }
}
export default App2