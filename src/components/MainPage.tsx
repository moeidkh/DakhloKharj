import Header from "./Header/Header";
import styles from "./mainPage.module.scss";
import Balance from "./Balance/Balance";

const MainPage = () => {
  return (
    <div className={styles.container}>
      <Header title="moeid" />
      <Balance />
    </div>
  )
}

export default MainPage;
