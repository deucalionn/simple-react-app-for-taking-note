import React from 'react';
import { useAllNotes } from '../contexts/notes';
import NoteBox from '../components/NoteBox/NoteBox';
import { Link } from "react-router-dom";


const Home: React.FC = () => {
    const { notes, addNote } = useAllNotes();
    const importantNotes = notes.filter(note => note.important);
    return (
        <div className=''>
            <div className={'text-black menu-item text-xl hover:font-bold p-2'}>
                <Link to={"/"}>Retour</Link>
            </div>
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
