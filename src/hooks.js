import React,{useEffect, useState} from "react";

function Hook(){
    const [count, setCount]=useState(0);
    const [count1, setCount1]=useState(1);


    useEffect(()=>{            
       
      console.log('mounted')
    },[]);
    console.log('end')


    return(
        <div>
            <h1>{count}</h1>
            <button onClick={()=>setCount('hello')}>update me</button>
             <h1>{count1}</h1> 
            <button onClick={()=>setCount1('welcome')}>update me</button>  

        </div>
    )
}

export default Hook