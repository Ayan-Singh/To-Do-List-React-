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

function useFetch(){
  const[post,setPost] = useState({})
  async function getData(){
    const response=await fetch("https/url");
    const json= await response.json();
    setPost(json)
  }
  useEffect(()=>{
    getData();
  },[])

  return post

}


function App() {
const{count,increaseCount}=useCounter()
const post = useFetch()

  return (
    <>
    <div>{post.title}</div>
     <button onClick={increaseCount}>Counter {count}</button>
    </>
  )
}

export default App
