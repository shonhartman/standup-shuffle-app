import React, { useState } from "react";

export default function AddDeveloperForm({ addDeveloper }) {

  const [value, setValue] = useState();

  const handleValueChange = (e) => {
    setValue({
      value: e.target.value
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addDeveloper(value);
    setValue('');
  }

    return (
      <form onSubmit={handleSubmit}>
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
