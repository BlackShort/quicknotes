
import { createContext, useEffect, useState } from "react";
import { fetchNotes, getNote } from "./NotesFunction";

const ContextApi = createContext();

const NoteContext = ({ children }) => {

    const [notes, setNotes] = useState([]);
    const [noteData, setNoteData] = useState({});
    const [showNotes, setShowNotes] = useState(false);
    const [userCredentials, setUserCredentials] = useState({});
    const [user, setUser] = useState({});

    const [isAuthenticated, setIsAuthenticated] = useState(() => {
        return localStorage.getItem("isAuthenticated") === "true";
    });

    useEffect(() => {
        localStorage.setItem("isAuthenticated", isAuthenticated);
    }, [isAuthenticated]);

    const readNote = async (noteid) => {
        setShowNotes(true);
        const data = await getNote(noteid);
        setNoteData(data);
    };

    const handleFetchNote = async () => {
        const data = await fetchNotes();
        setNotes(data);
    };

    return (
        <ContextApi.Provider value={{
            notes, setNotes,
            user, setUser,
            showNotes, setShowNotes, noteData, setNoteData,
            readNote, handleFetchNote,
            userCredentials, setUserCredentials,
            isAuthenticated, setIsAuthenticated,
        }}>
            {children}
        </ContextApi.Provider>
    );
}

export { NoteContext, ContextApi };