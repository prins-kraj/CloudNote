import React, {useContext, useEffect} from 'react';
import noteContext from "../context/notes/noteContext";
import Noteitems from './Noteitems';
import AddNote from './AddNote';

function Notes() {
  const context = useContext(noteContext);
  const {notes, getNotes} = context;
  useEffect(()=>{
    getNotes()
    // eslint-disable-next-line
  }, [])
  
  return (
    <>
      <AddNote/>
      <div className="row my-3">
        <h2>Your Notes</h2>
        {notes.map((notes)=>{
          return <Noteitems key={notes._id} notes={notes}/>;
        })}
      </div>
    </>
  )
}

export default Notes
