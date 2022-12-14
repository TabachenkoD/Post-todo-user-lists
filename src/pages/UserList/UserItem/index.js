import { NavLink, Outlet } from 'react-router-dom';
import styles from './style.module.css';
import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faIdCard } from "@fortawesome/free-solid-svg-icons";

const UserItem = ({ user }) => {
    const [isListOpen, setListOpen] = useState(false);
    const toggleList = () => setListOpen((isOpen) => !isOpen);

    return (
        <ul className={styles.user_list}>
            <li><FontAwesomeIcon icon={faIdCard} className={styles.icon} /> <b>Name:</b> {user.name}</li>
            <li><FontAwesomeIcon icon={faAddressCard} className={styles.icon} /> <b>Username:</b> {user.username}</li>
            {isListOpen && <Outlet context={[user.email, user.phone, user.website, user.address.street, user.address.city]} />}
            <li><NavLink key={user.id} to={`${user.id}`} className={styles.link} onClick={toggleList}>{isListOpen ? 'Less' : 'More'}</NavLink></li>
        </ul >
    )
}

export default UserItem;