import styles from './style.module.css';

const PostElement = ({ post }) => {
    return (
        <li>
            {/* <span className={styles.subtitle}><b>User:</b> {user?.name}</span> */}
            <span className={styles.subtitle}><b>Title:</b> {post.title}</span>
            <span className={styles.subtitle}><b>Post:</b> {post.body}</span>
        </li>
    )
}

export default PostElement;