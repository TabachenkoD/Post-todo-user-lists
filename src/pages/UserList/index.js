import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader";
import { getUsers } from "../../store/features/userSlice";
import UserItem from './UserItem';

import styles from './style.module.css';


const UserList = () => {
    const dispatch = useDispatch();
    const { users, loading, error } = useSelector((state) => state.user);

    useEffect(() => {
        dispatch(getUsers())
    }, [])

    return (
        <>
            {loading && <Loader />}
            {
                !loading && users.length ? (
                    <div className="container">
                        <h1 className={styles.title}>User List</h1>
                            {
                                users?.map((user) => {
                                    return <UserItem key={user.id} user={user} />
                                })
                            }
                    </div>
                ) : null
            }
            {
                !loading && !users.length ? (
                    <div className="container">{error}</div>
                ) : null
            }
        </>
    )
}

export default UserList;

