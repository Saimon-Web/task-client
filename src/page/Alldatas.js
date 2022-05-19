import { Toast } from 'bootstrap';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import useData from '../hooks/useData';
import './Alldatas.css'
const Alldatas = () => {
    const [todos, setTodos] = useData();

    const [style, setStyle] = useState("");
    
    const changeStyle = (_id) => {
        const url = `http://localhost:5000/todo/${_id}`
        fetch(url)
            .then(res => {res.json()       
            })
            .then(data => {
                console.log(data)
                console.log("you just clicked");
                toast('completed task ', {_id})
                setStyle("cont2");
            })
   
     
    };

    const handleDelete = id => {
        const url = `http://localhost:5000/todo/${id}`
        fetch(url, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)

                //UI TEKE DELETE
                const remaining = todos.filter(product => product._id !== id);
                setTodos(remaining)
            })
    }

    return (
        <div className='w-50 mx-auto'>

            <div class="card">

                <div class="card-body">

                    {

                        todos.map(todo => <div className='border py-4'>
                            <p className={style}>Name:{todo.name}</p>
                            <p className={style} >{todo.description}</p>

                            <button className='btn btn-danger m-2' onClick={() => handleDelete(todo._id)}>Delete</button>
                            <button className='btn btn-danger m-2' onClick={()=>changeStyle(todo._id)}>complete</button>



                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Alldatas;










