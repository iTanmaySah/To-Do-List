import axios from 'axios';
import React, { useState } from 'react';

const ToDo = ({todo, handleToggle}) => {
const [status,setStatus]=useState("")
    const handleClick = async(e) => {
        
        e.preventDefault()
        handleToggle(e.currentTarget.id)
        console.log("1")
        await axios.delete(`http://localhost:3001/pages/${e.currentTarget.id}`)
        setStatus("Delete successfully")
        console.log(status)
    }

    return (
        <div id={todo.id} key={todo.id + todo.task} name="todo" value={todo.id} onClick={handleClick} className={todo.complete ? "todo strike" : "todo"}>
            {todo.task}
        </div>
    );
};

export default ToDo;