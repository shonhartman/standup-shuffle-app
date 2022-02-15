import './App.css';
import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Developer from './components/Developer';
import AddDeveloperForm from './components/AddDeveloperForm';

function App() {

  // TODO : get initial state from localStorage
  const [developers, setDevelopers] = useState([
    {
      name: "Jonathan",
      id: 1
    },
    {
      name: "Jereme",
      id: 2
    },
    {
      name: "JPG",
      id: 3
    },
    {
      name: "Reehana",
      id: 4
    }
  ]);

  // TODO: Persist to localStorage with a similar function to below
  // localStorage.setItem('CURRENT_DEVS', JSON.stringify(this.state.developers));
  function useStickyState(defaultValue, key) {
    const [value, setValue] = useState(() => {
      const stickyValue = window.localStorage.getItem(key);
      return stickyValue !== null
        ? JSON.parse(stickyValue)
        : defaultValue;
    });
    useEffect(() => {
      window.localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);
    return [value, setValue];
  }

  const handleRemoveDeveloper = (id) => {
    setDevelopers(developers.filter(d => d.id !== id));
  };

  const handleAddDeveloper = (name) => {
    setDevelopers([...developers, {
      name,
      id: Date.now()
    }]);
  }

  function shuffle(array) {
    let currentIndex = array.length,  randomIndex;

      // While there remain elements to shuffle...
      while (currentIndex !== 0) {
      
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        
        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex], array[currentIndex]];
      }

      return array;
  }

  const shuffleDevs = () => {

    const shuffledDevs = [...developers];

    setDevelopers(shuffle(shuffledDevs));

  };

  return (
    <div className="board">
      <Header 
        title="Standup Shuffle" 
        developers={developers} 
        shuffleDevs={shuffleDevs}
      />
      {/* DEVELOPER LIST */}
      {developers.map( (developer, index) => 
        <Developer 
          key={developer.name} 
          id={developer.id}
          name={developer.name} 
          index={index}
          removeDeveloper={handleRemoveDeveloper} 
        /> 
      )}
      <AddDeveloperForm addDeveloper={handleAddDeveloper} />
    </div>
  );
  }

export default App;
