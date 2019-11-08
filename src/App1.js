import React from 'react'
import {Component} from 'react'
import './App1.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App1 extends Component{
    state = {
        inputValue:""
    }

    inputChangedHandler = (event)=>{
        this.setState({
            inputValue: event.target.value,
        });
    }

    charDeleteHandler(index){
        let str = this.state.inputValue;
        let newstr = str.slice(0, index) + str.slice(index + 1)
        this.setState({inputValue:newstr});
    }

    render(){
        const map = Array.prototype.map;
        const mapOnInput = map.bind(this.state.inputValue)
        let chars = mapOnInput((char,index)=> {
            return <Char char={char} index={index} key={index} click={()=>this.charDeleteHandler(index)}/>
        });

        return(
            <div className="App1">
                <input type="text" onChange={this.inputChangedHandler} value={this.state.inputValue}></input>
                <p>{this.state.inputValue.length}</p>
                <Validation length={this.state.inputValue.length}/>
                {chars}
            </div>
        )
    }

}

export default App1