import { useEffect } from "react";
import { useState } from "react";
// ✅ Create a Logger component.
// ✅ Use useEffect to log "Component Mounted!" when the component loads.
// ✅ Add a button to toggle the component on/off (use conditional rendering).
// ✅ When the component unmounts, log "Component Unmounted!".

export default function Logger(){
const [toggle,settoggle]=useState(true)
function setToggler(){
    settoggle(!toggle)
}
    useEffect(()=>{
        console.log("Component Mounted")
        return () =>{
        console.log("Component unmounted")   
        }

    },[])

    return (
        <div>
          {toggle && <p>Logger Component is Mounted</p>}
          <button onClick={setToggler}>{toggle ? "Turn OFF" : "Turn ON"}</button>
        </div>
      );
    }
