import React from 'react'
import {FaTimes} from 'react-icons/fa'

export default function Task({task,onDelete,onToggle}) {
  return (
    <div className={`alert  py-1 alert-success text-capitalize ${task.reminder?'task-reminder':''}`}
    onDoubleClick={()=>onToggle(task.id)}  
    >
        <h5>{task.text}  <FaTimes className='float-end m-3'
        style={{
            color:'green',
            cursor:'pointer'
        }}
        onClick={()=>onDelete(task.id)}/></h5>
        <p>{task.day}</p>
    </div>
  )
}
