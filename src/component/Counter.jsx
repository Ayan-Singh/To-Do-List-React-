import { useState } from "react";


export default function Counter(){
const [count,setCount] =useState(0);
function increaseCount(){
    if(count >=0 ){
        setCount(count+1);
    }
}
function decreaseCount(){
    if(count >0 ){
        setCount(count-1);
    }
}

return(
    <div>
        <button onClick={increaseCount}>+</button>
        Counter {count}
        <button onClick={decreaseCount}>-</button>    
    </div>
)
}