import { useState } from "react";
import ToDoItem from "./ToDoItem";

const ToDoList = ({ todos, onAddTodo, onToggleTodo, onDeleteTodo, onEditTodo }) => {
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTodo(newTodo);
    setNewTodo("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="mb-4 flex">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a task..."
          className="border p-2 w-full rounded-md"
        />
        <button type="submit" className="bg-pink-500 text-white px-4 py-2 ml-2 rounded-md hover:bg-pink-600">
          Add
        </button>
      </form>

      <ul className="space-y-2">
        {todos.map((todo) => (
          <ToDoItem
            key={todo.id}
            todo={todo}
            onToggleTodo={onToggleTodo}
            onDeleteTodo={onDeleteTodo}
            onEditTodo={onEditTodo}
          />
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
