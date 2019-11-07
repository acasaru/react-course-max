import React from 'react';
import {Component} from 'react';
import './App.css';
import Person from './Person/Person'
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

class App extends Component {
  state={
    persons:[
      {id:"1", name:'Teo', age:10},
      {id:"2", name:'Grace', age:20},
      {id:"3", name:'Theo', age:13}
    ],
    userName:"Teo",
    showPersons: false,
  }
  
  switchNameHandler =()=>{
    this.setState({
      persons:[
        {id:'1', name:'Teodora', age:10},
        {id:'2', name:'Grace', age:20},
        {id:'3', name:'Theo', age:30}],
      otherState:"otherState"
    })
  }

  nameChangeHandler = (event, id) =>{
    const personIndex = this.state.persons.findIndex(p=> {return p.id === id});
    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons:persons})
    }

  usernameChangeHandler = (event) =>{
    this.setState({
      userName:event.target.value
    })
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

  render(){
    const style={
      backgroundColor:"white",
      font:"inherit",
      border:"1px solid blue",
      padding: "8px",
      margin: "5px"
    };

    let persons = null;
    if(this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person, index)=>{
            return (
            <Person 
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
        <button onClick={this.switchNameHandler} style={style}>Switch name</button>
        <button onClick={this.togglePersonsHandler}>Persons</button>
        {/* {this.state.showPersons?
          <div>
            <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
            <Person name={this.state.persons[1].name} age = {this.state.persons[1].age} changed={this.nameChangeHandler}/>
            <Person name={this.state.persons[2].name} age= {this.state.persons[2].age} />
          </div>
          : null} */}
        {persons}
        
        <div>
          <UserInput changeEventHandler={this.usernameChangeHandler} userName={this.state.userName}/>
          <UserOutput userName={this.state.userName}/>
          <UserOutput userName={this.state.userName}/>
        </div>
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hello, I\'m react app!'))
  }
}
  
export default App;
