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
        const {title, description, tag}= req.body;
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

module.exports = router;