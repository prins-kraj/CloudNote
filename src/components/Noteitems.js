import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";

const Noteitems = (props) => {
  const context = useContext(noteContext);
  const {deleteNote} = context;
  const { notes, updateNote } = props;
  return (
    <div className="col-md-3">
        <div className="card my-3">
            <div className="card-body">
                <div className="d-flex align-items-center">
                  <h5 className="card-title me-auto">{notes.title}</h5>
                    <i className="fa-regular fa-pen-to-square mx-2 text-primary" onClick={()=>{updateNote(notes)}}></i>
                    <i className="fa-regular fa-trash-can mx-2 text-danger" onClick={()=>{deleteNote(notes._id); props.showAlert("Note Deleted Successfully!!", "success");}}></i>
                </div>
                <p className="card-text">{notes.description}</p>
                
            </div>
        </div>
    </div>
  )
};

export default Noteitems;
