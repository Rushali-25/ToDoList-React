import { useState } from "react";

const ToDoItem = ({ todo, onToggleTodo, onDeleteTodo, onEditTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleSaveEdit = () => {
    if (editText.trim() !== "") {
      onEditTodo(todo.id, editText);
      setIsEditing(false);
    }
  };

  return (
    <li
      className={`flex items-center justify-between p-3 rounded-md transition-all duration-200 bg-white shadow-md`}
    >
      {/* ✅ Checkbox to mark task as completed */}
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggleTodo(todo.id)}
        className="mr-2 w-5 h-5 accent-pink-500 cursor-pointer"
      />

      {isEditing ? (
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          className="border p-1 rounded-md w-full"
        />
      ) : (
        <span
          className={`text-lg font-semibold transition-all duration-200 flex-1 ${
            todo.completed ? "line-through text-gray-500 italic" : "text-pink-800"
          }`}
        >
          {todo.text}
        </span>
      )}

      <div className="flex">
        {isEditing ? (
          <button onClick={handleSaveEdit} className="bg-green-500 text-white px-2 py-1 mx-1 rounded-md">
            Save
          </button>
        ) : (
          <button onClick={() => setIsEditing(true)} className="bg-yellow-500 text-white px-2 py-1 mx-1 rounded-md">
            Edit
          </button>
        )}

        <button
          onClick={(e) => {
            e.stopPropagation(); // Prevents checkbox toggle when deleting
            onDeleteTodo(todo.id);
          }}
          className="bg-red-500 text-white px-2 py-1 rounded-md"
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default ToDoItem;
