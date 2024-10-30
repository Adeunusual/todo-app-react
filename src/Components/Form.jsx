import { useState } from "react";
import styles from "../assets/css/Form.module.css";

export default function Form({ todos, setTodos }) {
  //declaration of variables
  const [todo, setTodo] = useState({
    name: "",
    done: false,
  });

  //function to handle change in input field
  function handleChange(e) {
    setTodo({ name: e.target.value, done: false });
  }

  //function to prevent default submission behaviout
  function handleSubmit(e) {
    e.preventDefault();

    setTodos([...todos, todo]); //setting each todo item into the list together with other previous items in the list
    setTodo({ name: "", done: false }); //clear field after adding new item
  }

  return (
    <>
      <form className={styles.todoform} action="" onSubmit={handleSubmit}>
        <div className={styles.form_group}>
          <input
            className={styles.form_input}
            onChange={handleChange}
            type="text"
            value={todo.name}
            placeholder="Todo item..."
          />
          <button className={styles.form_btn} type="submit">
            Add
          </button>
        </div>
      </form>
    </>
  );
}
