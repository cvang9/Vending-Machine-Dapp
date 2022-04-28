import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

function Hooks() {

// <<<<<<--------------1st Variation --> UseEffect Executes after Render and  If there is a change occur in states ---------->>>>>>>>>>>>


//     const [count,setCount] = useState(0);

//     useEffect(()=>{
//      console.log("UseEffect");   
//      document.title = count + " times clicked";
//     });
//     console.log("Render");s
//   return (
//     <div>
//       <h1>Current Count {count} </h1>
//       <button onClick={()=> setCount(count+1)}>+</button>
//     </div>
//   )

// <<<<<<--------------2nd Variation --> UseEffect Executes after Render only---------->>>>>>>>>>>>
        // const [count,setCount] = useState(0);

        // useEffect(()=>{
        // console.log("UseEffect");   
        // document.title = count + " times clicked";
        // },[]);
        // console.log("Render");
        // return (
        // <div>
        // <h1>Current Count {count} </h1>
        // <button onClick={()=> setCount(count+1)}>+</button>
        // </div>
        // )

// <<<<<<--------------3rd Variation --> UseEffect Executes after Render only and if there is a change occur in given state---------->>>>>>>>>>>>


        const [count,setCount] = useState(0);
        const [txt, setText] = useState({name:"Shivang"});

        useEffect(()=>{
        console.log("UseEffect");   
        document.title = count + txt +" times clicked";
        },[txt,count]);                                        // Given State Text
        console.log("Render");
        return (
        <div>
        <h1>Current Count {count} </h1>
        <button onClick={()=> setCount(count+1)}>+</button>
        <h1>{txt.name}</h1>
        <button onClick={()=>setText({name:"INDIA"})}> Country </button>
        </div>
        )

}

export default Hooks
