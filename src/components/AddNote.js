import React, { useState } from "react";

const AddNote = ({ addNote }) => {
    const [noteText, setNoteText] = useState("");

    const charRemaining = 200;

    const handleChange = (e) => {
        charRemaining - e.target.value.length >= 0 &&
            setNoteText(e.target.value);
    };

    const handleClick = () => {
        noteText.trim() && addNote(noteText);
        // addNote(noteText);
        setNoteText("");
    };

    return (
        <div className="note new">
            <textarea
                placeholder="Type to add a note..."
                cols="10"
                rows="8"
                onChange={handleChange}
                value={noteText}
            ></textarea>
            <div className="note-footer">
                <small>
                    {charRemaining - noteText.length} Remaining
                </small>
                <button className="save" onClick={handleClick}>
                    Save
                </button>
            </div>
        </div>
    );
};

export default AddNote;
