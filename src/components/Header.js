import React from 'react';

export default function Header ({ title, developers, shuffleDevs }) {
  return (
    <header>
      <div className="stats">
        <div>Developers:</div>
        <div>{ developers.length }</div>
      </div>
      <h1>{title}</h1>
      <button className="shuffle" onClick={shuffleDevs}>Shuffle Devs</button>
    </header>
  )
}