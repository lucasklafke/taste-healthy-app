import styles from './logged-header.module.css';
import { IoMenuSharp, IoPersonSharp, IoSearchSharp } from "react-icons/io5";
export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.contentContainer}>
        <div className={styles.searchMenuContainer}>
          <div className={styles.menu}>
            <IoMenuSharp className={styles.icon}/>
            <IoPersonSharp className={styles.icon}/>
          </div>
          <div className={styles.searchContainer}>
            <input type="text" className={styles.input} placeholder='Procure por receitas e ingredientes!'/>
            <IoSearchSharp className={styles.search}/>
          </div>
        </div>
        <h1 className={styles.title}>Taste Healthy</h1>
      </div>
    </div>
  );
}
