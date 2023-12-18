import React from 'react';
import { useAllNotes } from '../contexts/notes';
import NoteBox from '../components/NoteBox/NoteBox';
import CreateNote from '../components/CreateNote/CreateNote';
import { Link } from "react-router-dom";

const Home: React.FC = () => {
    const { notes, addNote } = useAllNotes();


    return (
        <div className=''>
            <div className={'text-black menu-item text-xl hover:font-bold p-2'}>
                <Link to={"/important"}>Voir mes notes importantes</Link>
            </div>
            <div className='flex justify-center'>
                <CreateNote/>
            </div>
            <h1 className='text-center m-10 text-xl'>Notes</h1>
            <div className='flex justify-center'>
                <ul className='flex flex-wrap justify-center'>
                    {notes.map((note) => (
                        <NoteBox key={note.id} note={note}></NoteBox>
                    ))}
                    {notes.length === 0 && (
                        <p className='text-center'>Aucune note pour le moment</p>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default Home;
