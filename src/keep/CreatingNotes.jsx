import React, { useState } from 'react'
import Notes from './Notes'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import 'bootstrap/dist/css/bootstrap.css';

export default function CreatingNotes(props) {
    const [inputData, setInputData] = useState({
        title: "",
        content: ""
    })

    const addNote = (e)=>{
        e.preventDefault()

        if(inputData.title==="" && inputData.content==="") return

        props.clickAdd(inputData);
       setInputData({title: "", content:""})
    }

    const inputUser = (e)=>{
        const {name, value} = e.target;
        setInputData((prev)=>{
            return {
                ...prev, 
                [name] : value
            }
        })
    }  
    
    console.log(inputData)
  return (
   <>
   <div className="main_container">
    <form action="">
        <input className="form-control" type="text" placeholder='Enter Title' name='title' value={inputData.title}  onChange={inputUser}/>
        <input className="form-control" type="text" placeholder='content'  name='content' value={inputData.content} onChange={inputUser}/>
        {/* <button onClick={addNote}>
        Create Note
        </button> */}


        <Stack spacing={2} direction="row">
      {/* <Button variant="text">Text</Button> */}
      <Button variant="contained" onClick={addNote}>add</Button>
      {/* <Button variant="outlined">Outlined</Button> */}
    </Stack>


    
    </form>
   </div>

   </>
  )
}
