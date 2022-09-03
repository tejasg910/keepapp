import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
export default function Notes(props) {

  const deleteNotes = () => {
    props.deleteItem(props.id)
  }
  return (
    <>



      <div className="card my-2 mx-2">
        <div className="card-body">
          <h2 className='card-title'>{props.title}</h2>
          <p className='card-text'>{props.content}</p>
         

          <Stack spacing={2} direction="row">
           
            <Button variant="outlined" onClick={deleteNotes}>Delete</Button>
          </Stack>
        </div>
      </div>

    </>
  )
}
