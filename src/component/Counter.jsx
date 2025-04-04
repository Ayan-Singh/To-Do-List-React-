import { useState } from "react";

function Counter(){
    const[count,setCount]=useState(0)
    function increment(){
        setCount(count+1);
    }
    function decrement(){
        if(count>0){
            setCount(count-1)
        }
    }
    function reset(){
        setCount(0)
    }
    return(
        <>
        <div style={{height:"50px", display:"flex",alignItems:"center",fontSize:"25px",backgroundColor: 'blue', color: 'white',width:"200px"}}>Counter {count}</div>
        <div>
            <button onClick={increment}>Add+</button>
            <button onClick={decrement}>Subs-</button>
            <button onClick={reset}>Reset</button>
        </div>
        </>
    )
}
export default Counter