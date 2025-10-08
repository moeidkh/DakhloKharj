import Header from "./Header/Header";
import styles from "./mainPage.module.scss";
import Balance from "./Balance/Balance";
import { Footer } from "./Footer/Footer";

const MainPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Header title="moeid" />
        <div className={styles.contentContainer}>
          <Balance />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default MainPage;
