import TodoItem from "./TodoItem";
import styles from "../assets/css/TodoList.module.css";

export default function TodoList({ todos, setTodos, sortedTodos }) {
  return (
    <>
      <div className={styles.list}>
        {sortedTodos.map((item) => (
          <TodoItem
            key={item.name}
            item={item}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </div>
    </>
  );
}
