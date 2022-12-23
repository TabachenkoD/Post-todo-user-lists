import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faIdCard } from "@fortawesome/free-solid-svg-icons";

import styles from '../style.module.css';

const UserItem = ({ user }) => {

    return (
        <>
            <ul className={styles.user_list}>
                <li><FontAwesomeIcon icon={faIdCard} className={styles.icon} /> <b>Name:</b> {user.name}</li>
                <li><FontAwesomeIcon icon={faAddressCard} className={styles.icon} /> <b>Username:</b> {user.username}</li>
                <li><NavLink key={user.id} to={`${user.id}`} className={styles.link}>More</NavLink></li>
            </ul >
        </>
    )
}

export default UserItem;