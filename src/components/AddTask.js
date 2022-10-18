import React, { useState } from 'react'

export default function AddTask({onAdd}) {
    const[text,setText]=useState("");
    const[day,setDay]=useState("");
    const[reminder,setReminder]=useState(false);

    const onSubmit=(e)=>{
        e.preventDefault();

        if(!text){
            alert('please add task');
            return
        }
        onAdd({text,day,reminder})
        setText("")
        setDay("")
        setReminder(false);

       

        
    }
  return (
    <div>
        <form className='row' onSubmit={onSubmit} method="post">
            <div className="col-6">
                <label htmlFor="text" className='form-label'>Task</label>
                <input type="text" className='form-control' onChange={(e)=>setText(e.target.value)}/>
            </div>
            <div className="col-6">
                <label htmlFor="day" className='form-label text-capitalize'>add day & time</label>
                <input type="text" className='form-control' onChange={(e)=>setDay(e.target.value)} />
            </div>
            <div className="col-6 mt-3 ">
                <input type="checkbox" id='reminder' className='form-check-input  ' onChange={(e)=>setReminder(e.currentTarget.checked)}/>
                <label htmlFor="reminder" checked={reminder} className='form-check-label  mx-2 text-capitalize'>reminder </label>
            </div>
            <div className="col-12">
                <input type="submit" value="Add" className='btn btn-success form-control mt-2' />
            </div>
        </form>
    </div>
  )
}
