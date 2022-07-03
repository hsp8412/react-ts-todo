import React from "react";
import { Todo } from "../model";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
} from "@fortawesome/fontawesome-svg-core/import.macro";
import "./styles.css";

interface Props {
  todo: Todo;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  todos: Todo[];
}

const TaskCard: React.FC<Props> = ({ todo, setTodos, todos }) => {
  return (
    <form className="todo-card">
      <span className="todo-content">{todo.content}</span>
      <div>
        <FontAwesomeIcon icon={solid("pen-to-square")} />
        <FontAwesomeIcon icon={solid("trash-can")} />
        <FontAwesomeIcon icon={solid("check")} />
      </div>
    </form>
  );
};

export default TaskCard;
