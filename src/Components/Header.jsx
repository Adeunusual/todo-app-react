import styles from "../assets/css/Header.module.css";

export default function Header() {
  return (
    <>
      <header>
        <div className={styles.logo}>
          <img
            src="src\assets\images\logo.png"
            alt="myLogo"
            className="img_responsive"
          />
        </div>
        <div className={styles.header_brand}>
          <h1>Todolist</h1>
        </div>
      </header>
    </>
  );
}
