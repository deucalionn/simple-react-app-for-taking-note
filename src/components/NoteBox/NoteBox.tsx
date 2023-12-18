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
        <div className={`w-60 h-40 bg-${important ? 'yellow-500' : 'white'} border border-black rounded`}>
            <h2 className='text-xl text-center'>{note.title}</h2>
            <p className='text-lg text-center'>{note.description}</p>
            <div className='mt-10'>
                <button className='bg-red-500' onClick={handleDeleteNote}>Supprimer</button>
                <button className='bg-yellow-500' onClick={handleMarqueAsImportant}>Marquer comme importante</button>
            </div>
        </div>
    );
}

export default NoteBox;