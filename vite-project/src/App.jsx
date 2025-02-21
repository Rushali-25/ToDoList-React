import { useState } from "react";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";

const App = () => {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (text) => {
    if (text.trim() === "") return;
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  const handleToggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEditTodo = (id, newText) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-pink-100 rounded-lg shadow-lg mt-10">
      <Header />
      <ToDoList
        todos={todos}
        onAddTodo={handleAddTodo}
        onToggleTodo={handleToggleTodo}
        onDeleteTodo={handleDeleteTodo}
        onEditTodo={handleEditTodo}
      />
    </div>
  );
};

export default App;
