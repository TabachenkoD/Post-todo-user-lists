import styles from '../UserItem/style.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapLocation, faGlobe, faPhone, faEnvelope, faAddressCard, faIdCard, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';

const UserMoreInfo = () => {
    const { users } = useSelector((state) => state.user);
    const { id } = useParams();
    const navigate = useNavigate();

    const goBack = () => navigate(-1);
    const user = users.find(user => user.id == id)

    return (
        <>
            <ul className={styles.user_list}>
                <li><FontAwesomeIcon icon={faIdCard} className={styles.icon} /> <b>Name:</b> {user.name}</li>
                <li><FontAwesomeIcon icon={faAddressCard} className={styles.icon} /> <b>Username:</b> {user.username}</li>
                <li><FontAwesomeIcon icon={faEnvelope} className={styles.icon} /> <b>Email:</b> {user.email}</li>
                <li><FontAwesomeIcon icon={faPhone} className={styles.icon} /> <b>Phone:</b> {user.phone}</li>
                <li><FontAwesomeIcon icon={faGlobe} className={styles.icon} /> <b>Website:</b> {user.website}</li>
                <li><FontAwesomeIcon icon={faMapLocation} className={styles.icon} /> <b>Address:</b> {user.address.street}, {user.address.city}</li>
                <li><button onClick={goBack} className={styles.btn}><FontAwesomeIcon icon={faArrowLeft} /> Back</button></li>
            </ul>
        </>
    )
}

export default UserMoreInfo;