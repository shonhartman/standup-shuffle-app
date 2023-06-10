import "./App.css";
import React, { useEffect, useState } from "react";

import Header from "./components/Header";
import Developer from "./components/Developer";
import AddDeveloperForm from "./components/AddDeveloperForm";

function App() {
  // GET INITIAL STATE FROM LOCALSTORAGE IF AVAILABLE
  const [items, setItems] = useState(() => {
    return JSON.parse(localStorage.getItem("CURRENT_ITEMS")) || [];
  });

  // SET LOCAL STORAGE ON STATE CHANGE
  useEffect(() => {
    localStorage.setItem("CURRENT_ITEMS", JSON.stringify(items));
  }, [items]);

  // SHUFFLE FUNCTION
  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    // While there are elements to shuffle...
    while (currentIndex !== 0) {
      // Pick a remaining element...
      
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // Swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  const handleRemoveDeveloper = (id) => {
    setItems(items.filter((d) => d.id !== id));
  };

  const handleAddDeveloper = (name) => {
    setItems([
      ...items,
      {
        name,
        id: Date.now(),
      },
    ]);
  };

  const shuffleDevs = () => {
    const timing = [25, 50, 75, 100, 150, 250, 300];
    timing.map(time => {
      return setTimeout(() => {
        const shuffledDevs = [...items];
        setItems(shuffle(shuffledDevs));
      }, time)
    })
  };

  return (
    <div className="board bg-white">
      <Header
        title="Shuffle"
        items={items}
        shuffleDevs={shuffleDevs}
      />
      {/* DEVELOPER LIST */}
        {items.map((developer, index) => (
          <Developer
            key={developer.id}
            id={developer.id}
            name={developer.name}
            index={index}
            removeDeveloper={handleRemoveDeveloper}
          />
        ))}
      <AddDeveloperForm addDeveloper={handleAddDeveloper} />
    </div>
  );
}

export default App;
