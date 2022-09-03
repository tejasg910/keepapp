// import React, { useCallback } from 'react'
import { createContext } from 'react';
import Compc from './Compc';
import Compb from './Compb';


const FirstName = createContext();
const LastName = createContext();

export default function Compa() {
  return (
    //when you are passing the multiple values in the function then you have to include that self component into another component lets do experiments on this like exchanging the values of that components lets see what happens 
    <>

        <FirstName.Provider value={"tejas"}>
        <LastName.Provider value={"Giri"}>
           
            <Compb/>

        </LastName.Provider>
        </FirstName.Provider>
    </>
    )
}


export {FirstName, LastName}