import { useState } from "react";
import Form from "./Form";
import Header from "./Header";
import TodoList from "./TodoList";
import Footer from "./Footer";
import TasksStatus from "./TasksStatus";
import "../assets/css/stylesheet.css";

export default function Todo() {
  //declaration of variables
  const [todos, setTodos] = useState([]); //list of Todos

  const completedTodos = todos.filter((todo) => todo.done).length;
  const totalTodos = todos.length;
  const sortedTodos = todos
    .slice() //creates a memory copy of the original array
    .sort((a, b) => Number(a.done) - Number(b.done)); //sorts the array based on the done status
  return (
    <>
      <Header />
      <Form todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} sortedTodos={sortedTodos} />
      <Footer />
      <TasksStatus totalTodos={totalTodos} completedTodos={completedTodos} />
    </>
  );
}
