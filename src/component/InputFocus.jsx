// ✅ Create an InputFocus component.
// ✅ Add an input field and a "Focus Input" button.
// ✅ Use useRef to focus the input field when the button is clicked.
import { useRef } from "react";
export default function InputFocus(){
    const inputRef =useRef(null)
    const handleFocus = ()=>{
        inputRef.current.focus();
    }
    return(
        <>
        <input type="text" ref={inputRef} placeholder="Click the button to focus me"/>
        <button onClick={handleFocus}>Focus the input</button>
        </>
    )
} 