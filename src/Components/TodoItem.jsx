import styles from "../assets/css/TodoItem.module.css";

export default function TodoItem({ item, todos, setTodos }) {
  //declarations of members

  //function to handle delete
  function handleDelete(item) {
    setTodos(todos.filter((todo) => todo !== item)); //Filter maps through all the todos,is it finds the selected item todo it is filter, if not we set the other todos to setTodos
  }

  //function to handle item clicked for done
  function handleItemClicked(name) {
    const ArrayofTodosAfterDone = todos.map((todo) =>
      todo.name === name ? { ...todo, done: !todo.done } : todo
    );
    setTodos(ArrayofTodosAfterDone);
  }

  //logic to strike item if done
  const classNameOnDone = item.done ? styles.completed : "";

  return (
    <>
      <div className={styles.itemContainer}>
        <div className={styles.item}>
          <div className={styles.itemName}>
            <span
              className={classNameOnDone}
              onClick={() => handleItemClicked(item.name)}
            >
              {item.name}
            </span>
          </div>
          <button
            onClick={() => handleDelete(item)}
            className={styles.delete_btn}
          >
            x
          </button>
        </div>
        <hr className={styles.line} />
      </div>
    </>
  );
}
