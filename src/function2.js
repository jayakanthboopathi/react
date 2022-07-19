import React from "react";

function Person({person}){
    return(
        <div>
            <h2>
     Iam {person.fname}.Now Iam{person.age} years old.My skills are{person.age}
    </h2>
        </div>
    )
}

export default Person
