import styles from './style.module.css';
import Form from '../Form';

const Modal = ({ setActive }) => {

    return (
        <div className={styles.wrapper} onClick={() => setActive(false)}>
            <div className={styles.body} onClick={e => e.stopPropagation()}>
                <div className={styles.close_block}><span className={styles.close_btn} onClick={() => setActive(false)}>✕</span></div>
                <h2 className={styles.title}>Create New Post</h2>
                <hr />
                <Form />
            </div>
        </div>
    )
}

export default Modal;