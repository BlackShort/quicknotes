import { useContext } from 'react';
import { ContextApi } from '../context/ContextApi';
import { deleteNotes } from '../context/NotesFunction';

const ShowNotes = () => {
    const { noteId, setData, setNoteData, showNotes, setShowNotes, updateNoteData, setUpdateNoteData, noteData } = useContext(ContextApi);

    const UpdateData = () => {
        setUpdateNoteData(!updateNoteData);
        setShowNotes(!showNotes);
        setData(noteData);
    };

    const ShowNote = () => {
        setShowNotes(!showNotes);
        setData({
            title: "",
            description: ""
        });
        setNoteData({
            title: "",
            description: ""
        });
    }
    
    const DeleteNote = async () => {
        ShowNote();
        await deleteNotes(noteId);
    };

    return (
        <>
            <div className="shownotes" id="shownotes">
                <div className="pop-head">
                    <h2 id="noteHead">{noteData.title}</h2>
                    <div className="icons">
                        <svg onClick={DeleteNote} xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512">
                            <path d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1 -32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1 -32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1 -32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.7 23.7 0 0 0 -21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0 -16-16z" />
                        </svg>
                        <svg onClick={ShowNote} id="CloseNote" xmlns="http://www.w3.org/2000/svg" height="16" width="11" viewBox="0 0 352 512">
                            <path
                                d="M242.7 256l100.1-100.1c12.3-12.3 12.3-32.2 0-44.5l-22.2-22.2c-12.3-12.3-32.2-12.3-44.5 0L176 189.3 75.9 89.2c-12.3-12.3-32.2-12.3-44.5 0L9.2 111.5c-12.3 12.3-12.3 32.2 0 44.5L109.3 256 9.2 356.1c-12.3 12.3-12.3 32.2 0 44.5l22.2 22.2c12.3 12.3 32.2 12.3 44.5 0L176 322.7l100.1 100.1c12.3 12.3 32.2 12.3 44.5 0l22.2-22.2c12.3-12.3 12.3-32.2 0-44.5L242.7 256z" />
                        </svg>
                    </div>
                </div>
                <p id="noteText">{noteData.description}</p>
            </div>
            <button className="editNote" onClick={UpdateData} >
                <svg xmlns="http://www.w3.org/2000/svg" height="18" width="20" viewBox="0 0 576 512">
                    <path d="M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z" />
                </svg>
            </button>
        </>
    )
}

export default ShowNotes