import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapLocation, faGlobe, faPhone, faEnvelope, faAddressCard, faIdCard, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate, NavLink, Outlet } from 'react-router-dom';
import { getUser } from '../../../store/features/userDetailsSlice';

import styles from '../style.module.css';

const UserDetails = () => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.userDetails);
    const { id } = useParams();
    
    const navigate = useNavigate();
    const goBack = () => navigate('/users');

    const setClass = (navData) => navData.isActive ? `${styles.active} ${styles.item}` : styles.item;

    useEffect(() => {
        dispatch(getUser(id))
    }, [id])

    return (
        <div className='container'>
            <h1 className={styles.title}>Information about {user.name}</h1>
            <ul className={styles.user_list}>
                <li><FontAwesomeIcon icon={faIdCard} className={styles.icon} /> <b>Name:</b> {user.name}</li>
                <li><FontAwesomeIcon icon={faAddressCard} className={styles.icon} /> <b>Username:</b> {user.username}</li>
                <li><FontAwesomeIcon icon={faEnvelope} className={styles.icon} /> <b>Email:</b> {user.email}</li>
                <li><FontAwesomeIcon icon={faPhone} className={styles.icon} /> <b>Phone:</b> {user.phone}</li>
                <li><FontAwesomeIcon icon={faGlobe} className={styles.icon} /> <b>Website:</b> {user.website}</li>
                <li><FontAwesomeIcon icon={faMapLocation} className={styles.icon} /> <b>Address:</b> {user?.address?.street}, {user?.address?.city}</li>
                <li><button onClick={goBack} className={styles.btn}><FontAwesomeIcon icon={faArrowLeft} /> Back</button></li>
            </ul>
            <section className={styles.more_info}>
                <nav className={styles.nav}>
                    <ul className={styles.menu_list}>
                        <li className={styles.menu_btn}><NavLink className={setClass} to='albums'>Albums</NavLink></li>
                        <li className={styles.menu_btn}><NavLink className={setClass} to={'todos'}>Todos</NavLink></li>
                        <li className={styles.menu_btn}><NavLink className={setClass} to={'posts'}>Posts</NavLink></li>
                    </ul>
                </nav>
                <div>
                    <Outlet />
                </div>
            </section>
        </div>
    )
}

export default UserDetails;