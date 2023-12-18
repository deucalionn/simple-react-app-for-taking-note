import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import NoteBox from './NoteBox';
import { AllNoteProvider, useAllNotes } from '../../contexts/notes';

// mock the context provider
jest.mock('../../contexts/notes', () => ({
    AllNoteProvider: ({ children }: { children: React.ReactNode }) => children,
    useAllNotes: jest.fn(),
}));
  

describe('NoteBox Component', () => {
  // Mock note data
  const mockNote = {
    id: 1,
    title: 'Test Note',
    description: 'This is a test note',
    important: false,
  };

  // Mock context functions
  const mockMarqueAsImportant = jest.fn();
  const mockDeleteNote = jest.fn();

  beforeEach(() => {
    // reset mock functions
    mockMarqueAsImportant.mockClear();
    mockDeleteNote.mockClear();

    // moch the context values
    (useAllNotes as jest.Mock).mockReturnValue({
      marqueAsImportant: mockMarqueAsImportant,
      deleteNote: mockDeleteNote,
    });
  });

  test('renders NoteBox component with note data', () => {
    const { getByText } = render(
      <AllNoteProvider>
        <NoteBox note={mockNote} />
      </AllNoteProvider>
    );

    expect(getByText('Test Note')).toBeInTheDocument();
    expect(getByText('This is a test note')).toBeInTheDocument();
  });

  test('handles "Marquer comme importante" button click', () => {
    const { getByText } = render(
      <AllNoteProvider>
        <NoteBox note={mockNote} />
      </AllNoteProvider>
    );

    fireEvent.click(getByText('Marquer comme importante')); // click on the button

    expect(mockMarqueAsImportant).toHaveBeenCalledWith(1); // called with the good note id
  });

  test('handles "Supprimer" button click', () => {
    const { getByText } = render(
      <AllNoteProvider>
        <NoteBox note={mockNote} />
      </AllNoteProvider>
    );

    fireEvent.click(getByText('Supprimer'));

    expect(mockDeleteNote).toHaveBeenCalledWith(1);
  });
});
