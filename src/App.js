import React from 'react';
import {Component} from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state={
    persons:[
      {name:'Teo', age:10},
      {name:'Grace', age:20},
      {name:'Theo', age:13}
    ]
  }
  
  switchNameHandler =()=>{
    this.setState({
      persons:[
        {name:'Teodora', age:10},
        {name:'Grace', age:20},
        {name:'Theo', age:30}]
    })
  }

  render(){
    return (
      <div className = "App">
        <h1>Hi, I'm a React App</h1>
        <button onClick={this.switchNameHandler}>Switch name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age = {this.state.persons[1].age}/>
        <Person name={this.state.persons[2].name} age= {this.state.persons[2].age}/>
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hello, I\'m react app!'))
  }
}
  
export default App;
