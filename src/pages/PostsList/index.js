import './style.css';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader";
import { getPosts } from "../../store/features/postSlice";
import PostItem from './PostItem';
import Modal from "../../components/Modal";

const PostsList = () => {
    const dispatch = useDispatch();
    const { posts, loading, error } = useSelector((state) => state.post)
    const [modalActive, setModalActive] = useState(false);

    useEffect(() => {
        dispatch(getPosts());
    }, [])

    useEffect(() => {
        setModalActive(false)
    }, [posts])

    if (modalActive) {
        document.body.classList.add('modal_open');
    } else {
        document.body.classList.remove('modal_open');
    }

    return (
        <>
            {loading && <Loader />}
            {
                !loading && posts.length ? (
                    <div className="container">
                        <div className="titel_block">
                            <h1>Posts List</h1>
                            <button type="button" className="btn_for_modal" onClick={() => setModalActive(true)}>New Post</button>
                        </div>
                        <ul className="items_list">
                            {
                                posts?.map((post) => (
                                    <PostItem key={post.id} post={post} />
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
