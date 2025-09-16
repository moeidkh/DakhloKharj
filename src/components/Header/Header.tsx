import styles from "./Header.module.scss";
type PropsType = {
  title?: string,
}


const Header = (props: PropsType) => {
  return (
    <div className={styles.headerContainer}>
      {
        props.title ?
          <div className={styles.title}>{props.title}</div> :
          <div className={styles.profileContainer}>
            <div className={styles.profile} id="profile"></div>
          </div>
      }
    </div>
  )
}

export default Header;

