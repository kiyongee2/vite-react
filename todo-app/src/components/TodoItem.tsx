import type { Todo } from "../types/Todo";

interface Props{
  todo: Todo;
  onToggle: (id: number) => void;
  //onDelete: (id: number) => void;
}

const TodoItem = ({todo, onToggle} : Props) => {
  return(
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />
      <span
        style={{
          marginLeft: "10px",
          textDecoration: todo.completed ? "line-through" : "none"
        }}
      >
        {todo.text}
      </span>

      {/* <button
        style={{marginLeft: "20px", color: "red"}}
        onClick={() => onDelete(todo.id)}
      >
        삭제
      </button> */}
    </li>
  );
}

export default TodoItem