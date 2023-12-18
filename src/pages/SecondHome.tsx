import React from 'react';
import { useAllNotes } from '../contexts/notes';
import NoteBox from '../components/NoteBox/NoteBox';
import CreateNote from '../components/CreateNote/CreateNote';



const Home: React.FC = () => {
    const { notes, addNote } = useAllNotes();
    const importantNotes = notes.filter(note => note.important);
    return (
        <div className=''>
            <h1 className='text-center'>Notes</h1>
            <div className='flex justify-center'>
                <ul>
                    {importantNotes.map((note) => (
                        <NoteBox key={note.id} note={note}></NoteBox>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Home;
