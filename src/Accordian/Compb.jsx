import React, {useContext} from 'react'
import { FirstName, LastName } from './Compa'



export default function Compb() {


    //instead of using the consume function we have an option of useContext hook in which we can access the value of the createContext passed through the value you need to just import that objects from the createContext component you have made
    const fname = useContext(FirstName);
    const lname = useContext(LastName);
    console.log('we are in comp b')
  return (
    <h1>The name is {fname} </h1>
  )
}
