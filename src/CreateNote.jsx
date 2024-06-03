import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';

const CreateNote = (props) =>{

    const[note,setnote]=useState({
        title:"",
        content:"",
    });

    const InputEvent = (event) =>{

        const value=event.target.value;
        const name=event.target.name;
        // OR const {name,value}=event.target;
        setnote((prevData) =>{
             return {
                ...prevData,
                [name]:value,

             };
        });
    }

    const addEvent = () =>{
          props.passNote(note);
          setnote({
              title:"",
              content:"",
          });
    }
    return(
        <React.Fragment>
              <div className="main_note">
                   <form>
                       <input type="text" 
                       name="title" 
                       value={note.title} 
                       onChange={InputEvent} 
                       placeholder="Title"/>

                       <textarea rows="5"
                        name="content" 
                        value={note.content} 
                        onChange={InputEvent}
                         column="15" 
                         placeholder="Write a note here...">
                         </textarea>

                       <Button onClick={addEvent}>
                            <AddIcon className="plus_note"/>
                       </Button>
                   </form>
              </div>  
        </React.Fragment>
    )
}
export default CreateNote;