import React, { useEffect, useState } from 'react';
import data from "./data.json";
//components
import Header from "./Header";
import ToDoList from "./ToDoList";
import ToDoForm from './ToDoForm';
import axios from 'axios';


function App() {
  const [data2,setData2]=useState([])

  useEffect( ()=>{
    async function fetchData(){
    await axios.get("http://localhost:3001/pages").then(res=>{
    setData2(res.data);
    })
    // const pages=res.data;
    
  }
    fetchData()
  },[])

  console.log(data2[0])
  const [ toDoList, setToDoList ] = useState(data2);
  // console.log(toDoList)

  const handleToggle = (id) => {
    let mapped = data2.map(task => {
      return task.id === Number(id) ? { ...task, complete: !task.complete } : { ...task};
    });
    setData2(mapped);
  }

  const handleFilter = () => {
    let filtered = data2.filter(task => {
      return !task.complete;
    });
    setData2(filtered);
  }

  const addTask = (userInput ) => {
    let copy = [...data2];
    copy = [...copy, { id: data2.length + 1, task: userInput, complete: false }];
    setData2(copy);
  }

  return (
    <div className="App">
      <Header />
      <ToDoList toDoList={data2} handleToggle={handleToggle} handleFilter={handleFilter}/>
      <ToDoForm addTask={addTask}/>
    </div>
  );
}
export default App;