import React from "react";
import { Todo } from "../model";
import TaskCard from "./TaskCard";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TaskList: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <div className="todos">
      {todos.map((todo) => (
        <TaskCard key={todo.id} setTodos={setTodos} todo={todo} todos={todos} />
      ))}
    </div>
  );
};

export default TaskList;
