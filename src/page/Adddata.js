import React, { useEffect, useState } from 'react';
import useData from '../hooks/useData';


const Adddata = () => {
    // const [todos,setTodos]=useData();
    const [load,setload]=useState(true)
   
    const[todos,setTodos]=useState([]);
 
    useEffect(() => {
        if(load){
             setload(true)
          }
        fetch('http://localhost:5000/todo')
        .then(res => res.json())
        .then(data => setTodos(data))
    },[])

    const handleSubmit =event=> {
        event.preventDefault();
        const name=event.target.name.value;
        const description=event.target.description.value;
      
        const Todo={name,description};
        const url='http://localhost:5000/todo';
        fetch(url,{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(Todo)
        })
        .then(res => res.json())
        .then(data=>{
            console.log(Todo)               
            setTodos(Todo);
            
            event.target.reset();
        })
    }
    return (
        <div>
            <h1>Adding Product</h1>
       
            <form action="" onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder='Name' id="" />
                <input type="text" name="description" placeholder='description' id="" />
               
                <input type="submit" value="Add" />
            </form>
        </div>
    );
};

export default Adddata;