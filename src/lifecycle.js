import React, { Component } from "react";
import Mounting2 from "./mounting";

class Mounting extends Component{

    constructor(){
    super()
    this.state={
        fname:'indu'
    }
    console.log(' mounting constructor')
    }

    static getDerivedStateFromProps(props,state){
        console.log(' mounting getDerivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log('didmount')
    }
    shouldComponentUpdate(){
        console.log('updated should1')
        return true
    }
    componentDidUpdate(){
        console.log('update compound1')
    }

    changestate=()=>{
        this.setState({
            name:'code evaluation'
        })
    
    }
    render(){
        console.log('mounting render')
        return(
           
            <div>
                <Mounting2 />
                <button onClick={()=>this.changestate()}>change state</button> 
            
            </div>
            
        )
    }
}

export default Mounting