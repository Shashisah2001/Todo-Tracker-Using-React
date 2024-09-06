import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Form from "./Components/Form/Form";
import TodoTable from "./Components/TodoTable/TodoTable";
import Footer from "./Components/Footer/Footer";

function App() {
  const [todos, setTodos] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [showTable, setShowTable] = useState(false);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const toggleForm = () => {
    setShowForm(!showForm);
    setShowTable(false);
  };

  const toggleTable = () => {
    setShowTable(!showTable);
    setShowForm(false);
  };

  return (
    <div className="app-container">
      <Navbar toggleForm={toggleForm} toggleTable={toggleTable} />
      {showForm && <Form addTodo={addTodo} />}
      {showTable && <TodoTable todos={todos} />}
      <Footer />
    </div>
  );
}

export default App;
