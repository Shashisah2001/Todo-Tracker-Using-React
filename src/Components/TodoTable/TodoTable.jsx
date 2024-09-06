import React from "react";

function TodoTable({ todos }) {
  return (
    <table className="todo-table">
      <thead>
        <tr>
          <th>Title Name</th>
          <th>Date</th>
          <th>Time</th>
          <th>Description</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo, index) => (
          <tr key={index}>
            <td>{todo.title}</td>
            <td>{todo.date}</td>
            <td>{todo.time}</td>
            <td>{todo.description}</td>
            <td>
              <button>Edit</button>
            </td>
            <td>
              <button>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TodoTable;
