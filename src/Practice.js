import Button from "./Button";
import styles from "./Practice.module.css"

const Practice = () => {
  return (
    <div>
      <h1 className={styles.title}>Welcome Back!!!</h1>
      <Button text={"Continue"} />
    </div>
  );
}

export default Practice;
