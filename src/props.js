
import React, { Component } from "react";

class Hello extends Component{
    render(){
        return(
            <div>  
            <h1>hello
                </h1>
              <h3>{this.props.fname}{this.props.lname}</h3>  
            </div>
        )
             }
             
}
export default Hello



// const Greet = props=>{
//     return(
//         <>
//         <h3>hello {props.fname} {props.lname}</h3>
//         </>
//     )
// } 

// export default Greet