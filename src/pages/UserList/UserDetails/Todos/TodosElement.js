import styles from './style.module.css';

const TodosElement = ({ todo }) => {
    return (
        <li className={todo.completed ? `${styles.completed}` : null}>
            <input type="checkbox" checked={todo.completed} id={todo.id} disabled />
            <label htmlFor={todo.id}>{todo.title}</label>
        </li>
    )
}

export default TodosElement;



