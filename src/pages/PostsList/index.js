import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader";
import { getPosts } from "../../store/features/postSlice";
import PostItem from './PostItem';
import Modal from "../../components/Modal";

import styles from './style.module.css';

import { getUsers } from '../../store/features/userSlice';

const PostsList = () => {
    const dispatch = useDispatch();
    const { posts, loading, error } = useSelector((state) => state.post)
    const { users } = useSelector((state) => state.user);

    const [modalActive, setModalActive] = useState(false);

    useEffect(() => {
        dispatch(getPosts());
        dispatch(getUsers());
    }, [])

    useEffect(() => {
        setModalActive(false)
    }, [posts])

    if (modalActive) {
        document.body.classList.add('modal_open');
    } else {
        document.body.classList.remove('modal_open');
    }

   /*  const userName = users.find(el => el.id == 3)
    console.log(userName?.name) */

    return (
        <>
            {loading && <Loader />}
            {
                !loading && posts.length ? (
                    <div className="container">
                        <div className={styles.titel}>
                            <h1>Posts List</h1>
                            <button type="button" className={styles.btn} onClick={() => setModalActive(true)}>New Post</button>
                        </div>
                        <ul className={styles.items_list}>
                            {
                                posts?.map((post) => (
                                    <PostItem key={post.id} post={post} userName={users.find(user => user.id == post.userId)} />
                                ))
                            }
                        </ul>
                    </div>
                ) : null
            }
            {
                !loading && !posts.length ? (
                    <div className="container">{error}</div>
                ) : null
            }
            {modalActive && <Modal setActive={setModalActive} />}
        </>
    )
}

export default PostsList;
