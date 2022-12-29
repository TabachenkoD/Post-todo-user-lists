import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileLines, faImage } from "@fortawesome/free-solid-svg-icons";

import styles from './style.module.css';

const AlbumsElement = ({ album }) => {
    return (
        <>
            <ul className={styles.albums_list}>
                <li>{<FontAwesomeIcon icon={faImage} className={styles.icon} />} <b>Album:</b> {album.id}</li>
                <li>{<FontAwesomeIcon icon={faFileLines} className={styles.icon} />} <b>Title:</b> {album.title}</li>
            </ul >
        </>
    )
}

export default AlbumsElement;



