import { useContext } from 'react';
import { ContextApi } from '../context/ContextApi';
import ShowNotes from './ShowNotes';
import AddNotes from './AddNotes';

const Notes = () => {
    const { showNotes } = useContext(ContextApi);

    return (
        <div className="Home_Note">
            {
                showNotes ? <ShowNotes />: <AddNotes />
            }
        </div>
    )
}

export default Notes