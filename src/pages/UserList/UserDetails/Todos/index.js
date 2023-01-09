import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodos } from "../../../../store/features/userDetailsSlice";
import { useParams } from "react-router-dom";
import TodosElement from "./TodosElement";
import Loader from "../../../../components/Loader";

import styles from './style.module.css';

const Todos = () => {
    const dispatch = useDispatch();
    const { todos, loading, error } = useSelector((state) => state.userDetails);
    const { id } = useParams();

    useEffect(() => {
        /* dispatch(getTodos(id)) */
        dispatch(getTodos(id));
    }, [])

    return (
        <>
            {loading && <Loader />}
            {
                !loading && todos.length ? (
                    <>
                        <h1 className={styles.title}>Todos</h1>
                        <ul className={styles.items_list}>
                            {
                                todos?.map((todo) => {
                                    return <TodosElement key={todo.id} todo={todo} />
                                })
                            }
                        </ul>
                    </>
                ) : null
            }
            {
                !loading && !todos.length ? (
                    <>{error}</>
                ) : null
            }
        </>
    )
}

export default Todos;