import { BellIcon, LogInIcon, UserIcon } from "lucide-react";
import styles from "./Header.module.scss";
type PropsType = {
  title?: string,
}


const Header = (props: PropsType) => {
  return (
    <div className={styles.headerContainer}>
      {
        props.title ?
          <div className={styles.hasTitle}>
            <div className={styles.title}>{props.title}</div>
            <BellIcon size={24} />
          </div> :
          <div className={styles.profileContainer}>
            <UserIcon size={36} />
            <LogInIcon size={24} />
          </div>
      }
    </div>
  )
}

export default Header;

