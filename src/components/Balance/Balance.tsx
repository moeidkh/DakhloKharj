import styles from "./Balance.module.scss";

const Balance = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>ته‌مونده قلک</h2>
      <span className={styles.total}>
        530,000,000 تومان
      </span>
    </div>
  )
}

export default Balance;
