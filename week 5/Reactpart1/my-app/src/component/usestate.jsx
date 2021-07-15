import React,{useState} from 'react';

const Usestate =() =>{
    const[count,setcount]=useState(0)

   console.log("usestate")

    return(
        <div>
            <button onClick={()=>setcount((c) => c+1)}>count -  {count}</button></div>
    )
}

export default Usestate;