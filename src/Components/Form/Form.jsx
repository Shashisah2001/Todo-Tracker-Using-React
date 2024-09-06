import React, { useState } from "react";

function Form({ addTodo }) {
  const [title, setTitle] = useState("Shashi Kumar  Sah");
  const [date, setDate] = useState("10/5/2024");
  const [time, setTime] = useState("10:10:10 AM");
  const [description, setDescription] = useState("Software Developer");

  const handleDateTime = () => {
    const currentDateTime = new Date();
    setDate(currentDateTime.toLocaleDateString());
    setTime(currentDateTime.toLocaleTimeString());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = { title, date, time, description };
    addTodo(newTodo);
    setTitle("");
    setDate("");
    setTime("");
    setDescription("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <h2>Todo Tracker</h2>
      <input
        type="text"
        placeholder="Title Name"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Date"
        value={date}
        onFocus={handleDateTime}
        required
      />
      <input
        type="text"
        placeholder="Time"
        value={time}
        onFocus={handleDateTime}
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <button type="submit">Save</button>
      <button type="button" onClick={() => window.location.reload()}>
        Cancel
      </button>
    </form>
  );
}

export default Form;
