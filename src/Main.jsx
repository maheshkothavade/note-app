import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateNote from "./CreateNote";
import Note from "./Note";

const Main = () =>{

    const [addItem,setaddItem]=useState([]);
    const addNote = (note) =>{
        // alert("I'm clever")
        setaddItem((prevData) => {
            return [...prevData,note]
        })
    }

    const onDelete = (id) =>{
        setaddItem((olddata) => 
           olddata.filter((currdata, indx)=> {
             return indx !== id;
           })
        );
    };

    return(
        <React.Fragment>
               <Header/>
               <Footer/>
               <CreateNote
                  passNote={addNote}/>
            
               {addItem.map((val, index) => {
                    return (<Note
                    key={index}
                    id={index}
                    title={val.title}
                    content={val.content}
                    deleteItem={onDelete}
                    />
                    )
               })}
        </React.Fragment>
    )
}
export default Main;