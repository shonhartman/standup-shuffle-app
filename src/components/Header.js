import React from "react";

export default function Header ({ title, developers, shuffleDevs }) {
  return (
    <header>
      <table className="stats">
        <tbody>
          <tr>
            <td>Developers:</td>
            <td>{ developers.length }</td>
          </tr>
        </tbody>
      </table>
      <h1>{title}</h1>
      <button className='shuffle' onClick={shuffleDevs}>Shuffle Devs</button>
    </header>
  )
}