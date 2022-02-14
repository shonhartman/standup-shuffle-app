import React from "react";
import Stats from "./Stats";

export default function Header ({ title, developers, shuffleDevs }) {
  return (
    <header>
      <Stats developers={developers} />
      <h1>{title}</h1>
      <button className='shuffle' onClick={shuffleDevs}>Shuffle Devs</button>
    </header>
  )
}