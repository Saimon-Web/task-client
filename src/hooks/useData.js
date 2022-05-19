import { useEffect, useState } from "react"

const useData =()=> {

    const[todos,setTodos]=useState([]); 
   
    useEffect(() => {
      
        fetch('http://localhost:5000/todo')
        .then(res => res.json())
        .then(data => setTodos(data))
    },[])
    return[todos,setTodos];
}
export default useData;