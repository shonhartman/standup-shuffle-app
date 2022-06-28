import React from "react";

export default function Developer({ name, removeDeveloper, id }) {
  return (
    <div className="developer">
      <span className="developer-name">
          <button
            className="remove-developer"
            onClick={() => removeDeveloper(id)}
          >
            x
          </button>

          {name}
      </span>
    </div>
  );
}
