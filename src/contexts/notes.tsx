import React, { createContext, useContext, ReactNode, useState } from 'react';
import Note  from '../modules/Note';

// context type
type AllNotesContextType = {
  notes: Note[];
  addNote: (newNote: Note) => void;
  deleteNote: (id: number) => void;
  marqueAsImportant: (id: number) => void;
  getLastId: () => number;
};

const AllNotesContext = createContext<AllNotesContextType | undefined>(undefined);
let lastId = 0;

// provider
export const AllNoteProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [notes, setNotes] = useState<Note[]>([]);

  const addNote = (newNote: Note) => {
    setNotes((prevNotes) => [...prevNotes, newNote]);
    lastId = newNote.id;
  };

  const deleteNote = (id: number) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  }

  const marqueAsImportant = (id: number) => {
    const note = notes.find((note) => note.id === id);
    if (note) {
      note.important = !note.important;
      setNotes([...notes]);
    }
  }

  const getLastId = () => {
    return lastId;
  }


  const contextValue: AllNotesContextType = {
    notes,
    addNote,
    deleteNote,
    marqueAsImportant,
    getLastId,
  };



  return (
    <AllNotesContext.Provider value={contextValue}>
      {children}
    </AllNotesContext.Provider>
  );
};

// custom hook
export const useAllNotes = (): AllNotesContextType => {
  const context = useContext(AllNotesContext);

  if (!context) {
    throw new Error("useAllNotes must be used within an AllNoteProvider");
  }

  return context;
};
