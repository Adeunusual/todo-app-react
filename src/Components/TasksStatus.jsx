import styles from "../assets/css/TasksStatus.module.css";
export default function TasksStatus({ totalTodos, completedTodos }) {
  return (
    <>
      <div className={styles.tasks_status}>
        <p className={styles.completed}>Tasks Completed: {completedTodos}</p>
        <p className={styles.total}>Total Tasks: {totalTodos}</p>
      </div>
    </>
  );
}
