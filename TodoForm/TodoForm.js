import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { todoActions } from '../store/todo-slice'
import classes from './TodoForm.module.css'

const TodoForm = () => {
    const inputRef = useRef()
    const dispatch = useDispatch()

    const addTodoHandler = (event) => {
        event.preventDefault()
        const text = inputRef.current.value

        dispatch(todoActions.add({ title: text }))
        inputRef.current.value = ''
    }

    return (
        <form className={classes.Form}>
            <input type="text" name="todo_text" placeholder="Type and hit ⏎" ref={inputRef} />
            <button type="submit" onClick={(event) => addTodoHandler(event)}>Add Todo</button>
        </form>
    )
}

export default TodoForm