import React, { useState } from 'react'
import data from './api';
import "../App.css"
export default function Accordian({question, answer}) {
  console.log(data)
  const [show, setShow] = useState(false)
  return (
    <>
    <div className="main_container">

       <div className="elements">
      
        {question}
        <div className="plus" onClick={()=>{
          setShow(!show)
        }}>{show ? "➖" : "➕"}</div>
        
        </div>

      
        <div className="answers">
        {/* Checking the value of the of state by and operator  */}
        {show && <p>{answer}</p>}  
        </div>
        </div>

    </>
  )
}
