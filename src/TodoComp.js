import React from "react";

const TodoComp = () => {
  // 5.Build a beautiful to-do list application with useState where you can add and remove items.
  const [todos, setTodos] = React.useState([]);
  const [newTodo, setNewTodo] = React.useState("");

  return (
    <div className="border text-center w-50 ms-5 bg-black">
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button
        onClick={() => setTodos([...todos, newTodo])}
        className="btn btn-primary ms-2"
      >
        Add
      </button>
      <ul>
        {todos.map((todo, index) => (
          <li className="text-light mt-2" key={index}>
            {todo}
            <button
              onClick={() => setTodos(todos.filter((t) => t !== todo))}
              className="btn btn-danger ms-3"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoComp;
