import React from "react";
import Person from "./Person";


const Greetings = () =>{

    const person=[
        {
            id:1,
            name:"deny",
            age:20
        },
        {
            id:2,
            name:"benny",
            age:21
        },
        {
            id:3,
            name:"cherry",
            age:22
        },
    ]
    const names=["deny","benny","cherry","deny"]
    // const personlist =person.map(person => (<Person key={person.id} person={person}/>))
    const namelist =names.map((name,index) => (<h2 key={name}>{index}  {name}</h2>))
    return(
        <div>{namelist}
        <label>Username:</label> <input type="text" /></div>
        
    )
}
export default Greetings;