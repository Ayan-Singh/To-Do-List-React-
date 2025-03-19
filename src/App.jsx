import { useState} from 'react'
import './App.css'

function useCounter(){
  const[count,setCount]=useState(0);

  function increaseCount(){
    setCount(count+1);
  }
  return{
    count:count,
    increaseCount:increaseCount
  }

}

function useFetch()


function App() {
const{count,increaseCount}=useCounter()

  return (
    <>
     <button onClick={increaseCount}>Counter {count}</button>
    </>
  )
}

export default App
