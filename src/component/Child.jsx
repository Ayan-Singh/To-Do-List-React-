import { useState } from "react";
import Parent from "./Parent";

export default function Child({count,handleClick}){
    return(
        <h1>Child Component Counter {count}  <button onClick={handleClick}> + </button></h1>
    )
}