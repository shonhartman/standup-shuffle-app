import React from "react";

export default function Stats({ developers }) {

  return (
    <table className="stats">
      <tbody>
        <tr>
          <td>Developers:</td>
          <td>{ developers.length }</td>
        </tr>
      </tbody>
    </table>
  )
}