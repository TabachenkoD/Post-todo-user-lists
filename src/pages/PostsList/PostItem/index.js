import styles from '../style.module.css';

const PostItem = ({ post, userName }) => {
    return (
        <li>
            <span className={styles.subtitle}><b>From User:</b> {userName?.name}</span>
            <span className={styles.subtitle}><b>Title:</b> {post.title}</span>
            <span className={styles.subtitle}><b>Post:</b> {post.body}</span>
        </li>
    )
}

export default PostItem;