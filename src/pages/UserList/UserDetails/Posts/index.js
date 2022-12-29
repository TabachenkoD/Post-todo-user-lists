import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../../../store/features/userDetailsSlice";
import { useParams } from "react-router-dom";
import PostsElement from "./PostsElement";
import Loader from "../../../../components/Loader";

import styles from './style.module.css';

const Posts = () => {
    const dispatch = useDispatch();
    const { posts, loading, error } = useSelector((state) => state.userDetails);
    const { id } = useParams();

    useEffect(() => {
        dispatch(getPosts(id))
    }, [])

    return (
        <>
            {loading && <Loader />}
            {
                !loading && posts.length ? (
                    <>
                        <h1 className={styles.title}>Posts</h1>
                        <ul className={styles.posts_list}>
                            {
                                posts?.map((post) => {
                                    return <PostsElement key={post.id} post={post} />
                                })
                            }
                        </ul>
                    </>
                ) : null
            }
            {
                !loading && !posts.length ? (
                    <>{error}</>
                ) : null
            }
        </>
    )
}

export default Posts;