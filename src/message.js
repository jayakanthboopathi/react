import React, { Component } from "react";

class Message extends Component{

    constructor(){
        super()
        this.state={
            message: 'please subscribe'
        }
    }

    changemessage(){
        this.setState({
            message:'Thankyou for subscribing'
        })
    }
    render(){
        return(
            <div>  
            <h1>{this.state.message}</h1>
            <button onClick={()=>this.changemessage()}>subscribe</button>    
            </div>
        )
             }
             
}


export default Message