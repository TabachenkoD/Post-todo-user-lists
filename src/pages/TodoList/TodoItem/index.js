import { useDispatch } from "react-redux";
import { toggleStatus } from "../../../store/features/todoSlice"

const TodoItem = ({ todo }) => {
    const dispatch = useDispatch();

    return (
        <li className={todo.completed ? 'completed' : null}>
            <input type="checkbox" checked={todo.completed} onChange={() => dispatch(toggleStatus(todo.id))} id={todo.id} />
            <label htmlFor={todo.id} className='lable_in_todo'>{todo.id} {todo.title}</label>    
        </li>
    )
}

export default TodoItem;