import React, { useState } from 'react';
import Note from '../../modules/Note';
import { useAllNotes } from '../../contexts/notes';


interface NoteBoxProps {
    note: Note;
}

const NoteBox: React.FC<NoteBoxProps> = ({ note }) => {

    const { marqueAsImportant } = useAllNotes();
    const { deleteNote } = useAllNotes();
    // save if note is important
    const [important, setImportant] = useState<boolean>(note.important);

    const handleMarqueAsImportant = () => {
        console.log(note.id);
        marqueAsImportant(note.id);
        setImportant(!important);
    }

    const handleDeleteNote = () => {
        deleteNote(note.id);
    }


    return (
        <div className={`w-60 h-auto p-2 bg-${important ? 'yellow-500' : 'white'} rounded  shadow-md hover:shadow-lg transition-transform transform scale-95 hover:scale-100`}>
            <div className=''>
                <h2 className='text-xl text-center'>{note.title}</h2>
                <p className='text-base'>{note.description}</p>
            </div>

            <div className='mb-3 mt-10 flex grid grid-1-cols gap-2'>
                <button className='border-2 border-red-500 p-2 rounded bg-white' onClick={handleDeleteNote}>Supprimer</button>
                <button className='border-2 border-orange-400 p-2 rounded bg-white' onClick={handleMarqueAsImportant}>Marquer comme importante</button>
            </div>
        </div>
    );
}

export default NoteBox;