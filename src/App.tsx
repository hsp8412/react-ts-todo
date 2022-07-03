import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import { Todo } from "./model";
import TaskList from "./components/TaskList";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), content: todo, isDone: false }]);
      setTodo("");
    }
  };

  return (
    <div className="App">
      <span className="heading">Task Tracker</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TaskList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
