import React from 'react';
import  ReactDOM  from 'react-dom';


// const Helloworld =()=>{
//     return (
//         <div><h1>Hello World</h1></div>
      
//     )
// }

const Helloworld = <h1>Hello, world</h1>;
ReactDOM.render([Helloworld,<h2>It is {new Date().toLocaleTimeString()}.</h2>], document.getElementById('root'));

export default Helloworld;

console.log("hello")