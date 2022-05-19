import React from 'react';
import useData from '../hooks/useData';


const Alldata = () => {
    const [todos,setTodos]=useData();
    return (
        <div>
            {
                todos.length
            }
            
        </div>
    );
};

export default Alldata;