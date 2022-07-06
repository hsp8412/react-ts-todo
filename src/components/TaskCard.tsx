import React, { useEffect, useRef } from "react";
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
  const [edit, setEdit] = React.useState(false);
  const [editTodo, setEditTodo] = React.useState(todo.content);

  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, content: editTodo } : todo
      )
    );
    setEdit(false);
  };

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    console.log(inputRef.current);
    inputRef.current?.focus();
  }, [edit]);

  return (
    <form
      className={todo.isDone ? "todo-card-done" : "todo-card"}
      onSubmit={(e) => handleEdit(e, todo.id)}
    >
      {edit ? (
        <input
          ref={inputRef}
          value={editTodo}
          onChange={(e) => {
            setEditTodo(e.target.value);
          }}
          className="todo-edit"
        />
      ) : (
        <span className="todo-content">{todo.content}</span>
      )}
      <div className="todo-icons">
        <span className="icon">
          <FontAwesomeIcon
            icon={solid("pen-to-square")}
            onClick={() => {
              if (!edit && !todo.isDone) {
                setEdit(!edit);
              }
            }}
          />
        </span>
        <span className="icon">
          <FontAwesomeIcon
            icon={solid("trash-can")}
            onClick={() => {
              handleDelete(todo.id);
            }}
          />
        </span>
        <span className="icon">
          <FontAwesomeIcon
            icon={solid("check")}
            onClick={() => handleDone(todo.id)}
          />
        </span>
      </div>
    </form>
  );
};

export default TaskCard;
