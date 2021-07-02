import PropTypes from 'prop-types';
import React, { useState } from 'react';
import './styles.css';

const CreateArea = ({ onAdd }) => {
  const [note, setNote] = useState({ title: '', content: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNote((preValue) => ({
      ...preValue,
      [name]: value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onAdd(note);
  };

  return (
    <div>
      <form>
        <input value={note.title} type='text' placeholder='Title' name='title' onChange={handleChange} />
        <p>
          <textarea value={note.content} name='content' placeholder='Take a note...' onChange={handleChange} />
        </p>
        <button onClick={onSubmit} type='submit'>
          Add
        </button>
      </form>
    </div>
  );
};

CreateArea.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

export default CreateArea;
