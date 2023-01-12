import { useDispatch } from 'react-redux';
import { toggleStatus } from "../../../../store/features/todoSlice";

import styles from './style.module.css';

const TodosElement = ({ todo }) => {
    const dispatch = useDispatch();

    return (
        <li className={todo.completed ? `${styles.completed}` : null}>
            <input type="checkbox" checked={todo.completed} onChange={() => dispatch(toggleStatus(todo.id))} id={todo.id} />
            <label htmlFor={todo.id}>{todo.id} {todo.title}</label>
        </li>
    )
}

export default TodosElement;



