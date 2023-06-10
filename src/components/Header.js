import React from 'react';

export default function Header ({ title, items, shuffleDevs }) {
  return (
    <header className='uppercase rounded-t-md'>
      <div className="stats">
        <div>Count:</div>
        <div>{ items.length }</div>
      </div>
      <h1>{title}</h1>
      <button className="shuffle" onClick={shuffleDevs}>
        <svg class="shuffle-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" height="32" width="32">
          <polyline points="18 4 22 4 22 10"></polyline>
          <line x1="6" y1="20" x2="22" y2="4"></line>
          <polyline points="22 16 22 22 16 22"></polyline>
          <line x1="16" y1="16" x2="22" y2="22"></line>
          <line x1="6" y1="6" x2="12" y2="12"></line>
        </svg>
      </button>
    </header>
  )
}