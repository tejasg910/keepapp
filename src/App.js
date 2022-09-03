import logo from './logo.svg';
import './App.css';
import MyAccordian from './Accordian/Myaccordian';
import Compa from './Accordian/Compa';
import Compb from './Accordian/Compb';
import Navbar from './keep/Navbar';
import CreatingNotes from './keep/CreatingNotes';
import { useState } from 'react';
import Notes from './keep/Notes';

function App() {
  const [mainData, setMainData]=useState([])
  
  const addNote = (inputData)=>{
    // alert("You have clicked the add button");
    setMainData((prev)=>{
      return [...prev, inputData]
    })
  }

  const deleteNote=(id)=>{
    alert('clicked')
     setMainData((prev)=>
        prev.filter((val, index)=>{
          return id!==index;
        })
     )
  }
  return (
    <>
    <Navbar/>
    <CreatingNotes clickAdd={addNote}/>
    <div className="card_container">
      
    {
      mainData.map((val, index)=>{
        return <Notes content={val.content}
        title={val.title}
        id={index}
        key={index}
        deleteItem={deleteNote}
        />
      })
    }
    
    </div>

    </>
  );
}

export default App;
