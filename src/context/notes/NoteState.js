import { useState } from 'react'
import NoteContext from './noteContext'

const NoteState = (props)=>{
    const s1 = {
        "name": "Prince",
        "class": "Graduation"
    }
    const [state, setState] = useState(s1);
    const update = ()=> {
        setTimeout(()=>{
            setState({
                "name": "Prince kumar",
                "class": "Graduation in Electrical Engineering"
            })
        }, 1000);
    }
    return (
        <NoteContext.Provider value={{state, update}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;