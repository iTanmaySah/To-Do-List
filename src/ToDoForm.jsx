import React, { useState } from 'react';
import axios from 'axios';

const ToDoForm = ({ addTask }) => {

    const [ userInput, setUserInput ] = useState('');

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        addTask(userInput);
        await axios.post("http://localhost:3001/pages",{"task":userInput})
        setUserInput("");
    }
    return (
        <form onSubmit={handleSubmit}>
            <input class="input" value={userInput} type="text" onChange={handleChange} placeholder="Add New Task..."/>
            <button class="submit-button">Add</button>
        </form>
    );
};

export default ToDoForm;