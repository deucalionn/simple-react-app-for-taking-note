import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { AllNoteProvider } from '../contexts/notes';
import Home from './Home';
import { BrowserRouter } from 'react-router-dom';


describe('Home', () => {
  test('Note interactions', async () => {
    render(
      <AllNoteProvider>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </AllNoteProvider>
    );

    expect(await screen.findByText(/aucune note pour le moment/i)).toBeInTheDocument();
    
    const noteTitle = screen.getByLabelText('note-title')
    fireEvent.change(noteTitle, {target: {value: 'My title'}})
    const noteContent = screen.getByLabelText('note-content')
    fireEvent.change(noteContent, {target: {value: 'My content'}})

    fireEvent.click(screen.getByText(/ajouter une note/i));


    expect(screen.queryByText(/aucune note pour le moment/i)).not.toBeInTheDocument();

    const noteElement = screen.getByTestId('note-element');

    expect(await screen.findByText(/my title/i)).toBeInTheDocument();
    expect(await screen.findByText(/my content/i)).toBeInTheDocument();

    fireEvent.click(await screen.findByText(/marquer comme importante/i));

    expect(noteElement).toHaveClass('bg-yellow-500'); // tcheck if the class is present
    expect(await screen.findByText(/marquer comme non- importante/i)).toBeInTheDocument();

    fireEvent.click(await screen.findByText(/supprimer/i));

    expect(await screen.findByText(/aucune note pour le moment/i)).toBeInTheDocument();
  });
});
