import React, { Component } from "react";

class Mounting2 extends Component{

    constructor(){
    super()
    this.state={
        fname:'indu'
    }
    console.log(' mounting2 constructor')
    }

    static getDerivedStateFromProps(props,state){
        console.log(' mounting2 getDerivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log('didmount2')
    }
    shouldComponentUpdate(){
        console.log('updated should2')
        return true
    }
    componentDidUpdate(){
        console.log('update compound2')
    }
    render(){
        console.log('mounting2 render')
        return(
           
            <div>
                <h1>mounting</h1>

            </div>
            
        )
    }
}

export default Mounting2