const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
const Notes = require('../models/Notes');
const { body, validationResult } = require('express-validator');



// ROUTE 1: 
// Get all notes using : GET "/api/notes/fetchallnotes". Login required 
router.get('/fetchallnotes', fetchuser, async (req, res)=>{
    try {
        const notes = await Notes.find({user: req.user.id});
        res.json(notes)
    } catch (error) {                  // catching error
        console.log(error.message);
        res.status(500).send("Server Error Occured");
    }
})

// ROUTE 2: 
// Get all notes using : POST "/api/notes/addnotes". Login required 
router.post('/addnotes', fetchuser, [
    // title must be at least 3 chars long
    body('title', 'Invalid title').isLength({ min: 3 }),
    // password must be at least 5 chars long
    body('description', 'Description must be 5 character').isLength({ min: 5 }),
] , async (req, res)=>{
    try {
        const {title, description, tag}= req.body;     // destructuring kar ke la rha hu ye sab req.body se
        // Finds the validation errors in this request and wraps them in an object with handy functions
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
        }
        const note = new Notes ({
            title, description, tag, user: req.user.id
        })
        const saveNote = await note.save()     // saving note
        res.json(saveNote)
    } catch (error) {                  // catching error
        console.log(error.message);
        res.status(500).send("Server Error Occured");
    }
})

// ROUTE 3: 
// update an existing notes using : PUT "/api/notes/updatenotes/:id". Login required 
router.put('/updatenotes/:id', fetchuser, async (req, res)=>{
    const {title, description, tag}= req.body;     // destructuring kar ke la rha hu ye sab req.body se

    try {
        // create a newnote object
        const newNote = {};
        if(title){newNote.title=title};
        if(description){newNote.description=description};
        if(tag){newNote.tag=tag};

        // find the note to be updated and update it 
        let note =await Notes.findById(req.params.id);
        if(!note){
            return res.status(404).send("Not found");
        }

        // check the user and note related to user
        if(note.user.toString()!== req.user.id){
            return res.status(401).send("NOt allowed");
        }

        note = await Notes.findByIdAndUpdate(req.params.id, {$set: newNote}, {new: true});   // find and update the note
        res.json({note});
    } catch (error) {                  // catching error
        console.log(error.message);
        res.status(500).send("Server Error Occured");
    }
})

// ROUTE 4: 
// Delete an existing notes using : DELETE "/api/notes/deletenotes/:id". Login required 
router.delete('/deletenotes/:id', fetchuser, async (req, res)=>{
    try {
        // find the note to be deleted and delete it 
        let note =await Notes.findById(req.params.id);
        if(!note){
            return res.status(404).send("Not found");
        }

        // Allow deletion only if user owns this note
        if(note.user.toString()!== req.user.id){
            return res.status(401).send("NOt allowed");
        }

        note = await Notes.findByIdAndDelete(req.params.id);   // find and delete the note
        res.json({"success": "Note Deleted", note: note});
    } catch (error) {                  // catching error
        console.log(error.message);
        res.status(500).send("Server Error Occured");
    }
})

module.exports = router;