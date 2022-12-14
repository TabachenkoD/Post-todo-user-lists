import styles from './style.module.css';
import { useOutletContext } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapLocation, faGlobe, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const UserMoreInfo = () => {
    const [email, phone, website, street, city] = useOutletContext();
    return (
        <>
            <li><FontAwesomeIcon icon={faEnvelope} className={styles.icon} /> <b>Email:</b> {email}</li>
            <li><FontAwesomeIcon icon={faPhone} className={styles.icon} /> <b>Phone:</b> {phone}</li>
            <li><FontAwesomeIcon icon={faGlobe} className={styles.icon} /> <b>Website:</b> {website}</li>
            <li><FontAwesomeIcon icon={faMapLocation} className={styles.icon} /> <b>Address:</b> {street}, {city}</li>
        </>
    )
}

export default UserMoreInfo;