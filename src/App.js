import './App.css';
import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Developer from './components/Developer';
import AddDeveloperForm from './components/AddDeveloperForm';

function App() {

  // GET INITIAL STATE FROM LOCALSTORAGE IF AVAILABLE
  const [developers, setDevelopers] = useState(() => {
    return JSON.parse(localStorage.getItem('CURRENT_DEVS')) || [];
  });

  // SET LOCAL STORAGE ON STATE CHANGE
  useEffect(() => {
    localStorage.setItem('CURRENT_DEVS', JSON.stringify(developers));
  }, [developers]);

  // SHUFFLE FUNCTION
  function shuffle(array) {
    let currentIndex = array.length,  randomIndex;

      // While there are elements to shuffle...
      while (currentIndex !== 0) {
      
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        
        // Swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex], array[currentIndex]];
      }

      return array;
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
