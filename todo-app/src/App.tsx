
import './App.css'
import TodoItem from './components/TodoItem'
import { useState, useEffect } from 'react';
import type { Todo } from './types/Todo';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]); //todo 배열 상태
  const [input, setInput] = useState(""); //todo 입력 상태

  // localStorage에서 todos 로드
  useEffect(() => {
    const saved = localStorage.getItem("todos"); //로컬저장소에서 가져옴
    if (saved) {
      setTodos(JSON.parse(saved)); //저장된 문자열을 배열로 파싱
    }
  }, []);

  // todos가 변경되면 저장
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // todo 추가
  const addTodo = () => {

    const newTodo: Todo = {
      id: Date.now(),
      text: input,
      completed: false
    };

    setTodos([...todos, newTodo]); //기존 todo 객체에 새로운 todo 추가
    setInput("");
  }

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) => 
        //completed: !todo.completed - 완료 여부 반대로 변경
        todo.id === id ? {...todo, completed: !todo.completed} : todo
      )
    );
  }

  return (
    <div className="container">
      <h1>Todo App</h1>

      <div className="input-box">
        <input
          type="text"
          placeholder="할 일을 입력하세요"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addTodo}>추가</button>
      </div>

      <ul className="todo-list">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={toggleTodo}
            //onDelete={deleteTodo}
          />
        ))}
      </ul>
    </div>
  )
}

export default App
