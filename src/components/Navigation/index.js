import styles from './style.module.css'
import { NavLink, Outlet } from 'react-router-dom';

const Navigation = () => {
    const setClass = (navData) => navData.isActive ? `${styles.active} ${styles.item}` : styles.item;

    return (
        <>
            <nav className={styles.nav}>
                <ul className={styles.menu_list}>
                    <li className={styles.menu_btn}><NavLink className={setClass} to='/posts'>Posts List</NavLink></li>
                    <li className={styles.menu_btn}><NavLink className={setClass} to='/todos'>To do List</NavLink></li>
                    <li className={styles.menu_btn}><NavLink className={setClass} to='/users'>User List</NavLink></li>
                </ul>
            </nav>
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default Navigation;