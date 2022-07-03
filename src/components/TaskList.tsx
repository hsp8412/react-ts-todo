import React from "react";
import { Todo } from "../model";
import TaskCard from "./TaskCard";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TaskList: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <div className="tasks">
      {todos.map((todo) => (
        <li>
          <TaskCard setTodos={setTodos} todo={todo} todos={todos} />
        </li>
      ))}
    </div>
  );
};

export default TaskList;
