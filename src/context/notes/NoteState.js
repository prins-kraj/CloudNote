import { useState } from 'react'
import NoteContext from './noteContext'

const NoteState = (props)=>{
  const host = "http://localhost:5000";
    const notesInitial = []
    
    const [notes, setNotes] = useState(notesInitial)

    //Get all Note
    const getNotes = async ()=>{
      // API call
      const response = await fetch(`${host}/api/notes/fetchallnotes`,{
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token')
        }
      });
      const json= await response.json();
      console.log(json)
      setNotes(json)
    }


    // Add a Note
    const addNote = async (title, description, tag)=>{
      // API call
      const response = await fetch(`${host}/api/notes/addnotes`,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token')
        },
        body: JSON.stringify({title, description, tag})
      });
      const note =await response.json();
      setNotes(notes.concat(note));
    }

    // Delete a Note
    const deleteNote = async (id)=>{
      // TODO: api call
      const response = await fetch(`${host}/api/notes/deletenotes/${id}`,{
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token')
        }
      });
      const json= await response.json();
      console.log(json);

      const newNotes = notes.filter((note)=>{ return note._id!==id})
      setNotes(newNotes);
    }

    // Edit a Note
    const editNote = async (id, title, description, tag)=>{
      // API call
      const response = await fetch(`${host}/api/notes/updatenotes/${id}`,{
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token')
        },
        body: JSON.stringify({title, description, tag})
      });
      // eslint-disable-next-line
      const json= await response.json();
      
      let newNotes = JSON.parse(JSON.stringify(notes))
      // Logic to edit in clint server
      for (let index = 0; index < newNotes.length; index++) {
        const element = newNotes[index];
        if (element._id===id) {
          newNotes[index].title=title;
          newNotes[index].description=description;
          newNotes[index].tag=tag;
          break;
        }
      }
      setNotes(newNotes);
    }

    return (
        <NoteContext.Provider value={{notes, addNote, deleteNote, editNote, getNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;