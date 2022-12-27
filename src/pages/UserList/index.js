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
    
    return <div className="container">
            {loading && <Loader />}
            {
                !loading && users.length ? (
                    <>
                        <h1 className={styles.title}>User List</h1>
                        {
                            users?.map((user) => {
                                return <UserItem key={user.id} user={user} />
                            })
                        }
                    </>
                ) : null
            }
            {
                !loading && !users.length ? (
                    <>{error}</>
                ) : null
            }
    </div>
}

export default UserList;
