
import './App.css';
import { Component } from 'react';
import Welcome from './welcome';
//import Greet from './props';
import Hello from './props';
import Message from './message';
import Mounting from './lifecycle';



class App extends Component {
  render(){
    return(
      <div className="App">
        
        <Welcome />
        <Hello fname="Indu" lname="malini" />
        <Hello fname="Hari" lname="priya" />
        <Hello fname="Anu" lname="Lakshmi" />
        <Message />
        <Mounting />
        


      </div>
    );
  }
}

export default App;
