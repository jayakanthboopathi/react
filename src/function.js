import React from "react";
import Person from "./function2";

// function Greet(){ // normal function
//     return(
//         <div>
//             <h1>hello</h1>
//         </div>
//     )
// }

// const Greet=()=>{ //arrow function
//     return(
//         <div>
//             <h1>hello indu</h1>
//         </div>
//     )
// }

function NameList(){

    // const names=['indu','priya','nanthu']

    const persons=[{
        id:1,
        fname:'indu',
        age:20,
        skill:'react'
    },{
      id:2,
      fname:'priya',
      age:21,
    skill:'angular'
    },{
        id:3,
       fname:'nanthu',
       age:22,
       skill:'angular'

    }

]
    // const namelist= names.map(name1=><h1>{name1}</h1>)

     const personlist=persons.map(person=><Person key={person.fname} person={person}/>)
    
    
    
    return(
        <div>
         {/* names.map(name1=><h1>{name1}</h1>) */}

        {/* {namelist} */}
        {personlist}
  
        </div>
    )}
    
// export default Greet
export default NameList