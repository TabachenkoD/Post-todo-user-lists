import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader";
import { getUsers } from "../../store/features/userSlice";
import UserItem from './UserItem';
import styles from './style.module.css';

import { Outlet, useLocation, useParams } from "react-router-dom";

const UserList = () => {
    const dispatch = useDispatch();
    const { users, loading, error } = useSelector((state) => state.user);

    const location = useLocation();
    const { id } = useParams();

    useEffect(() => {
        dispatch(getUsers())
    }, [])

    return (
        <>
            {loading && <Loader />}
            {
                !loading && users.length && location.pathname !== `/userlist/${id}` ? (
                    <div className="container">
                        <h1 className={styles.title}>User List</h1>
                        {
                            users?.map((user) => {
                                return <UserItem key={user.id} user={user} />
                            })
                        }

                    </div>
                ) : (
                    <div className="container">
                        <h1 className={styles.title}>User Info</h1>
                        <Outlet />
                    </div>)
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

