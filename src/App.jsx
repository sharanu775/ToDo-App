import { useState } from "react";
import styles from "./components/App.module.css";

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (!task.trim()) return;
    setTodos([...todos, task]);
    setTask("");
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>My Tasks 📝</h1>

        <div className={styles.inputGroup}>
          <input
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Add a new task..."
          />
          <button className={styles.addBtn} onClick={addTodo}>
            Add
          </button>
        </div>

        <ul className={styles.list}>
          {todos.map((todo, index) => (
            <li key={index} className={styles.item}>
              {todo}
              <button
                className={styles.deleteBtn}
                onClick={() => deleteTodo(index)}
              >
                ×
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
