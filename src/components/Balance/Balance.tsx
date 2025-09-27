import styles from "./Balance.module.scss";

const Balance = () => {
  return (
    <div className={styles.container}>
      <div className={styles.balanceContainer}>
        <h2 className={styles.title}>ته‌مونده قلک</h2>
        <span className={styles.total}>530,000,000T</span>
      </div>
      <div className={styles.transactionContainer}></div>
    </div>
  );
};

export default Balance;
