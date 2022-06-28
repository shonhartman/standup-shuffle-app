import React, { useState } from "react";

export default function AddDeveloperForm({ addDeveloper }) {

  const [value, setValue] = useState('');

  const handleValueChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addDeveloper(value);
    setValue('');
  }

    return (
      <form className="rounded-b-md" onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={value}
          onChange={handleValueChange}
          placeholder="Enter a developer's name" 
        />
        <input type="submit" value="Add Developer" />
      </form>
    )
};
