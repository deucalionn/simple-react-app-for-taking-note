import React, { useState } from 'react';
import { useAllNotes } from '../../contexts/notes';
import Note from '../../modules/Note';

const CreateNote: React.FC = () => {
  const { addNote } = useAllNotes();
  const { getLastId } = useAllNotes();

  const [newNoteTitle, setNewNoteTitle] = useState<string>("");
  const [newNoteDescription, setNewNoteDescription] = useState<string>("");

  const handleAddNote = () => {
    const newNote: Note = {
      id: getLastId() + 1,
      title: newNoteTitle,
      description: newNoteDescription,
      important: false,
    };

    addNote(newNote);
    setNewNoteTitle("");
    setNewNoteDescription("");
  };

  return (
    <div className='p-2 border border-black rounded'>
      <div className='grid grid-cols-2 gap-2'>
        <div className='grid grid-cols-2 gap-3'>
          <label>Titre :</label>
          <input className='border border-black rounded m-2'
            type='text'
            value={newNoteTitle}
            onChange={(e) => setNewNoteTitle(e.target.value)}
        />
        </div>
        <div className='grid grid-cols-2 gap-3'>
          <label>Description :</label>
          <textarea className='border border-black rounded m-2'
            value={newNoteDescription}
            onChange={(e) => setNewNoteDescription(e.target.value)}
          />
        </div>
      </div>
      <button className="border" onClick={handleAddNote}>Ajouter une note</button>
    </div>
  );
};

export default CreateNote;
