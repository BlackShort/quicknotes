
import { createContext, useEffect, useState } from "react";
import { fetchNotes, getNote, updateNote } from "./NotesFunction";

const ContextApi = createContext();

const NoteContext = ({ children }) => {

    const [notes, setNotes] = useState([]);
    const [noteId, setNoteId] = useState("");
    const [updateNoteData, setUpdateNoteData] = useState(false);
    const [noteData, setNoteData] = useState({});
    const [showNotes, setShowNotes] = useState(false);
    const [userCredentials, setUserCredentials] = useState({});
    const [user, setUser] = useState({});
    const [data, setData] = useState({
        title: "",
        description: ""
    })


    const [isAuthenticated, setIsAuthenticated] = useState(() => {
        return localStorage.getItem("isAuthenticated") === "true";
    });

    useEffect(() => {
        localStorage.setItem("isAuthenticated", isAuthenticated);
    }, [isAuthenticated]);

    const readNote = async (noteid) => {
        setShowNotes(true);
        setNoteId(noteid);
        const data = await getNote(noteid);
        setNoteData(data);
    };

    const updateNotes = async (data) => {
        await updateNote({ data, noteId });
        readNote(noteId);
        setUpdateNoteData(false);
    };

    const handleFetchNote = async () => {
        const data = await fetchNotes();
        setNotes(data);
    };

    return (
        <ContextApi.Provider value={{
            notes, setNotes,
            user, setUser,
            data, setData,
            noteId, setNoteId,
            showNotes, setShowNotes, noteData, setNoteData, updateNoteData, setUpdateNoteData,
            readNote, updateNotes, handleFetchNote,
            userCredentials, setUserCredentials,
            isAuthenticated, setIsAuthenticated,
        }}>
            {children}
        </ContextApi.Provider>
    );
}

export { NoteContext, ContextApi };