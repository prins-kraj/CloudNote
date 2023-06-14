import { useState } from 'react'
import NoteContext from './noteContext'

const NoteState = (props)=>{
    const notesInitial = [
        {
          "_id": "6485c506e5c24ec08dccf18f",
          "user": "648579205f58812bf9ceb391",
          "title": "My title",
          "description": "Prince kumar",
          "tag": "personal",
          "date": "2023-06-11T12:58:46.052Z",
          "__v": 0
        },
        {
          "_id": "6485c506e5c24ec08dccf191",
          "user": "648579205f58812bf9ceb391",
          "title": "My title",
          "description": "Prince kumar",
          "tag": "personal",
          "date": "2023-06-11T12:58:46.202Z",
          "__v": 0
        },
        {
          "_id": "6485c506e5c24ec08dccf193",
          "user": "648579205f58812bf9ceb391",
          "title": "My title",
          "description": "Prince kumar",
          "tag": "personal",
          "date": "2023-06-11T12:58:46.337Z",
          "__v": 0
        },
        {
          "_id": "6485c506e5c24ec08dccf195",
          "user": "648579205f58812bf9ceb391",
          "title": "My title",
          "description": "Prince kumar",
          "tag": "personal",
          "date": "2023-06-11T12:58:46.484Z",
          "__v": 0
        },
        {
          "_id": "6485c506e5c24ec08dccf197",
          "user": "648579205f58812bf9ceb391",
          "title": "My title",
          "description": "Prince kumar",
          "tag": "personal",
          "date": "2023-06-11T12:58:46.649Z",
          "__v": 0
        },
        {
          "_id": "6485c506e5c24ec08dccf199",
          "user": "648579205f58812bf9ceb391",
          "title": "My title",
          "description": "Prince kumar",
          "tag": "personal",
          "date": "2023-06-11T12:58:46.798Z",
          "__v": 0
        },
        {
          "_id": "6485c506e5c24ec08dccf19b",
          "user": "648579205f58812bf9ceb391",
          "title": "My title",
          "description": "Prince kumar",
          "tag": "personal",
          "date": "2023-06-11T12:58:46.930Z",
          "__v": 0
        },
        {
          "_id": "6485e9cd39c1228ca94cb889",
          "user": "648579205f58812bf9ceb391",
          "title": "My title",
          "description": "Prince kumar",
          "tag": "personal",
          "date": "2023-06-11T15:35:41.587Z",
          "__v": 0
        },
        {
          "_id": "6485e9d739c1228ca94cb88b",
          "user": "648579205f58812bf9ceb391",
          "title": "My title",
          "description": "Prince kumar",
          "tag": "personal",
          "date": "2023-06-11T15:35:51.597Z",
          "__v": 0
        },
        {
          "_id": "6486c3f5e5559db5ad7e342b",
          "user": "648579205f58812bf9ceb391",
          "title": "My name",
          "description": "I am Prince kumar",
          "tag": "personal",
          "date": "2023-06-12T07:06:29.575Z",
          "__v": 0
        },
        {
          "_id": "61322f19553781af8ca8d0e08",
          "user": "6131dc5e3e4037cd4734a066",
          "title": "My Title",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2021-09-03T14:20:09.668Z",
          "__v": 0
        },
        {
          "_id": "61322f19553781a8ca468d0e08",
          "user": "6131dc5e3e4037cd4734a066",
          "title": "My Title",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2021-09-03T14:20:09.668Z",
          "__v": 0
        },
        {
          "_id": "61322f19553781a8ca84d0e08",
          "user": "6131dc5e3e4037cd4734a066",
          "title": "My Title",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2021-09-03T14:20:09.668Z",
          "__v": 0
        },
        {
          "_id": "61322f19553781a8ca8ud0e08",
          "user": "6131dc5e3e4037cd4734a066",
          "title": "My Title",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2021-09-03T14:20:09.668Z",
          "__v": 0
        },
        {
          "_id": "61322f19553781a8c5a8d0e08",
          "user": "6131dc5e3e4037cd4734a066",
          "title": "My Title",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2021-09-03T14:20:09.668Z",
          "__v": 0
        },
        {
          "_id": "61322f19553781a8uca8d0e08",
          "user": "6131dc5e3e4037cd4734a066",
          "title": "My Title",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2021-09-03T14:20:09.668Z",
          "__v": 0
        }
    ]
    
    const [notes, setNotes] = useState(notesInitial)

    return (
        <NoteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;