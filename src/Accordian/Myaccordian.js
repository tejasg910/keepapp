import React, { useState } from 'react'
import data from "./api"
import Accordian from "./Accordian"
export default function Myaccordian() {
    const [item, setItem] = useState(data);
    console.log(item)
  return (
    <>
   {/* THis is used to access the data from the accelator of the json data  */}
    {
      item.map((elem)=>{
        return <Accordian key={elem.id} {...elem}/> //passed the ...elem in the accordian 
      })
    }
    </>
  )
}
