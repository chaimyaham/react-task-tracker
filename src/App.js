import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from 'react';
import AddTask from './components/AddTask';
 

function App() {
  const[showAddForm,setShowAddForm]=useState(false);
  const[tasks,setTasks]=useState([
    {
        id:1,
        text:'Learning React',
        day:'everyday at 20h00',
        reminder:true
    },
    {
        id:2,
        text:'Posting a story ',
        day:' 17 Oct at 22h00',
        reminder:true
    },
    {
        id:3,
        text:'Meeting my bff ',
        day:'19 Oct at 14h00',
        reminder:false
    }
])
//Delete function
const deleteTask=(id)=>{
 setTasks(tasks.filter((task)=>task.id!==id))
}
//toggle Reminde
const reminder=(id)=>{

  setTasks(
    tasks.map((task)=>
    task.id===id?{...task,reminder:!task.reminder}:task
    )
  )
  //add task

  
}
const addTask=(task)=>{
  const id=Math.floor(Math.random()*10000)+1
  console.log(task,id)
  const newTask={id, ...task}
  setTasks([...tasks,newTask])
  // console.log('hi') 

}

  return (
    <div className="App">
      <Header onAdd={()=>setShowAddForm(!showAddForm)} showAddForm={showAddForm}/>
     {showAddForm &&  <AddTask onAdd={addTask}/> }
      <hr/>
      {tasks.length>0?(<Tasks 
      tasks={tasks} onDelete={deleteTask} onToggle={reminder} />) : (
       <h4>"No task"</h4> )}
    
 
    </div>
  );
}

export default App;
