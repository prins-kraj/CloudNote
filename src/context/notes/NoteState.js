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
          'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ4NTc5MjA1ZjU4ODEyYmY5Y2ViMzkxIn0sImlhdCI6MTY4NjQ4NTkxNX0.lifQ-Oj239KLjow9CA8g4hTjFweNg8HDE66YZme2faw'
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
          'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ4NTc5MjA1ZjU4ODEyYmY5Y2ViMzkxIn0sImlhdCI6MTY4NjQ4NTkxNX0.lifQ-Oj239KLjow9CA8g4hTjFweNg8HDE66YZme2faw'
        },
        body: JSON.stringify({title, description, tag})
      });


      // Logic to add note
      console.log('Adding a new note');
      const note = {
        "_id": "61322f1955378bv1a8ca8ud0e08",
        "user": "6131dc5e3e4037cd4734a066",
        "title": title,
        "description": description,
        "tag": tag,
        "date": "2021-09-03T14:20:09.668Z",
        "__v": 0
      };
      setNotes(notes.concat(note));
    }

    // Delete a Note
    const deleteNote = (id)=>{
      // TODO: api call
      console.log('Deleting note with id'+id)
      const newNotes = notes.filter((note)=>{ return note._id!==id})
      setNotes(newNotes);
    }

    // Edit a Note
    const editNote = async (id, title, description, tag)=>{
      // API call
      const response = await fetch(`${host}/api/notes/updatenotes/${id}`,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ4NTc5MjA1ZjU4ODEyYmY5Y2ViMzkxIn0sImlhdCI6MTY4NjQ4NTkxNX0.lifQ-Oj239KLjow9CA8g4hTjFweNg8HDE66YZme2faw'
        },
        body: JSON.stringify({title, description, tag})
      });
      // eslint-disable-next-line
      const json= response.json();
      

      // Logic to edit in clint server
      for (let index = 0; index < notes.length; index++) {
        const element = notes[index];
        if (element._id===id) {
          element.title=title;
          element.description=description;
          element.tag=tag;
        }
      }
    }

    return (
        <NoteContext.Provider value={{notes, addNote, deleteNote, editNote, getNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;