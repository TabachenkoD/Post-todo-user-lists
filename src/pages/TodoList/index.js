import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader";
import { getTodos } from "../../store/features/todoSlice";
import TodoItem from './TodoItem';

import styles from './style.module.css';

const TodoList = () => {
    const dispatch = useDispatch();
    const { todos, loading, error } = useSelector((state) => state.todo)

    useEffect(() => {
        dispatch(getTodos())
    }, [])

    return (
        <div className="container">
            {loading && <Loader />}
            {
                !loading && todos.length ? (
                    <>
                        <h1 className={styles.title}>To Do List</h1>
                        <ul className={styles.items_list}>
                            {
                                todos?.map((todo) => (
                                    <TodoItem key={todo.id} todo={todo} />
                                ))
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
        </div>
    )
}

export default TodoList;

