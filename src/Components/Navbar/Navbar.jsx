import React from "react";

function Navbar({ toggleForm, toggleTable }) {
  return (
    <nav className="navbar">
      <h1>Todo Tracker</h1>
      <div className="buttons">
        <button onClick={toggleForm}>Add-Todo</button>
        <button onClick={toggleTable}>Show-Table</button>
      </div>
    </nav>
  );
}

export default Navbar;
