import React from 'react';
import './App.css';
import { AllNoteProvider, useAllNotes } from './contexts/notes';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SecondHome from './pages/SecondHome';


function App() {

  return (
    <AllNoteProvider>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home/>}/>
          <Route path="/important" element={<SecondHome/>}/>
        </Routes>
    </BrowserRouter>
    </AllNoteProvider>
  );
}

export default App;
