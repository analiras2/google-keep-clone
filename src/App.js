import React, { useState } from 'react';
import { CreateArea, Header, Note } from './components';

const App = () => {
  const [notes, setNotes] = useState([]);

  const addNote = (newNote) => {
    setNotes((preValue) => [...preValue, newNote]);
  };
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((note, index) => (
        <Note key={`${note.title}-${index}`} id={index} title={note.title} content={note.content} />
      ))}
    </div>
  );
};

export default App;
