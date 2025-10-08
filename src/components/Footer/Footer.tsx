import { HistoryIcon, HouseIcon, PlusIcon } from "lucide-react";
import styles from "./footer.module.scss";
import { ReactNode } from "react";
import clsx from "clsx";
type Menu = {
  title?: string;
  icon: ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
}[];

export const Footer = () => {
  const menu: Menu = [
    {
      title: "خانه",
      icon: <HouseIcon />,
      onClick: () => console.log(">>>>>> click on house icon")
    },
    {
      title: "افزودن",
      icon: <PlusIcon size={32} />,
      onClick: () => console.log(">>>>>> click on plus icon")
    },
    {
      title: "تاریخچه",
      icon: <HistoryIcon />,
      onClick: () => console.log(">>>>>> click on history icon")
    }
  ]
  return (
    <footer className={styles.container}>
      {
        menu.map((item, index) => <button key={index} className={clsx(styles.menuItem)} onClick={item.onClick}>
          {item.icon}
          <span className={styles.title}>{item.title}</span>
        </button>)
      }
    </footer>
  )
}
