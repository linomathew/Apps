import { useSelector, useDispatch } from 'react-redux'
import { todoActions } from '../store/todo-slice'
import classes from './TodoList.module.css'

const TodoList = () => {
    const todos = useSelector(state => state.todo.todos)
    const dispatch = useDispatch()

    const onToggleCompleteHandler = ({ id, isCompleted }) => {
        dispatch(todoActions.toggleComplete({ id, isCompleted: !isCompleted }))
    }

    const onRemoveHandler = (id) => {
        dispatch(todoActions.remove({ id }))
    }

    return (
        <ul className={classes.List}>
            {todos.map(todo => (
                <li key={todo.id}>
                    <label>
                        <input
                            type="checkbox"
                            checked={todo.isCompleted}
                            onChange={() => onToggleCompleteHandler(todo)} />
                        <span>{todo.title}</span>
                    </label>
                    <span className={classes.Remove} onClick={() => onRemoveHandler(todo.id)}> (x)</span>
                </li>
            ))}
        </ul>
    )
}

export default TodoList