import { BellIcon, UserIcon } from "lucide-react";
import styles from "./Header.module.scss";
import clsx from "clsx";
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
            <div className="avatar">
              <div className={clsx("w-24 rounded", styles.avatar)}>
                <UserIcon size={36} />
              </div>
            </div>
            <button className={styles.button}>ورود</button>
          </div>
      }
      <BellIcon size={24} />
    </div>
  )
}

export default Header;

