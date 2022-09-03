import React from 'react'
import { FirstName, LastName } from './Compa'
export default function Compc() {
    console.log('we are in compc ')
    return (
        //once you declare the Createcontext in the main component from where you want to pass the data to lower component no need to declare at the lower component but but but, You have to write it in the name of that createcontext name here it is "Firstname" so i have created the Firstname tag and added the code in it, in this tag you have to write a function which returns the component content. Without that function you can not use the parsed value from the upper component to lower component. Here "fname" is the value that you declared in the main component (upper component ). 

        //what if you want to pass the multiple values 
        //here you have to understand that while using contextapi you have to return the things in the context tag but if there is more than one parsing values or context tag then you have to include it in the another context tag means in the return 
        // <FirstName.Consumer >

        //     {(fname) => {
        //         return (
        //             <LastName.Consumer>
        //                 {(lname) => {
        //                     return <h1>This is {fname} {lname}</h1>

        //                 }}
        //             </LastName.Consumer>
        //         );
        //     }}



        // </FirstName.Consumer>
        

        
        <LastName.Consumer >

            {(fname) => {
                return (
                    <FirstName.Consumer>
                        {(lname) => {
                            return <h1>This is {fname} {lname}</h1>

                        }}
                    </FirstName.Consumer>
                );
            }}



        </LastName.Consumer>
    )
}



