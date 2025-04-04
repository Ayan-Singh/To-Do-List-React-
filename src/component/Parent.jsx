// ✅ Create a Parent component with a count state.
// ✅ Pass count as a prop to Child.
// ✅ The Child should display the count and have a button to increase it.
import { useState } from "react";
import Child from "./Child";
export default function Parent(){
    const[count,setCount]=useState(0)
    function handleClick(){
        setCount(count+1)
      }
      return(
        <>
              <h1>I am a Parent Component</h1>
              <Child count={count} handleClick={handleClick} />
              </>
      )
      
}