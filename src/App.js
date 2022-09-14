import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import NotesList from "./components/NotesList";
import Search from "./components/Search";

const App = () => {
    const [notes, setNotes] = useState([
        {
            id: Math.floor(Math.random() * 100000),
            text: "This is a note!",
            date: new Date().toLocaleDateString(),
        },
    ]);

    const [searchText, setSearchText] = useState("");

    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const savedNotes = JSON.parse(
            localStorage.getItem("react-notes-app-data")
        );

        if (savedNotes) {
            setNotes(savedNotes);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(
            "react-notes-app-data",
            JSON.stringify(notes)
        );
    }, [notes]);

    const addNote = (text) => {
        const date = new Date();
        // const newNote = {
        //     id: Math.floor(Math.random() * 100000),
        //     text: text,
        //     date: date.toLocaleDateString()
        // }
        // const newNotes = [...notes, newNote];
        // setNotes(newNotes);
        const newNote = [
            ...notes,
            {
                id: Math.floor(Math.random() * 100000),
                text: text,
                date: date.toLocaleDateString(),
            },
        ];
        setNotes(newNote);
    };

    const deleteNote = (id) => {
        const newNotes = notes.filter((note) => note.id !== id);
        setNotes(newNotes);
    };

    return (
        <div className={`${isDarkMode && "dark-mode"}`}>
            <div className="container">
                <Header
                    isDarkMode={isDarkMode}
                    setIsDarkMode={setIsDarkMode}
                />
                <Search setSearchText={setSearchText} />
                <NotesList
                    notes={notes.filter((note) =>
                        note.text
                            .toLocaleLowerCase()
                            .includes(searchText)
                    )}
                    addNote={addNote}
                    deleteNote={deleteNote}
                />
            </div>
        </div>
    );
};

export default App;
