import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAlbums } from "../../../../store/features/userDetailsSlice";
import { useParams } from "react-router-dom";
import AlbumsElement from "./AlbumsElement";
import Loader from "../../../../components/Loader";

import styles from './style.module.css';

const Albums = () => {
    const dispatch = useDispatch();
    const { albums, loading, error } = useSelector((state) => state.userDetails);
    const { id } = useParams();

    useEffect(() => {
        dispatch(getAlbums(id))
    }, [])

    return (
        <>
            {loading && <Loader />}
            {
                !loading && albums.length ? (
                    <>
                        <h1 className={styles.title}>Albums</h1>
                        {
                            albums?.map((album) => {
                                return <AlbumsElement key={album.id} album={album} />
                            })
                        }
                    </>
                ) : null
            }
            {
                !loading && !albums.length ? (
                    <>{error}</>
                ) : null
            }
        </>
    )
}

export default Albums;