import TodoForm from './TodoForm/TodoForm'
import TodoList from './TodoList/TodoList'
import './App.css'

const App = () => {
  return (
    <div className="App">
      <div>
        <h2>Todo List</h2>
        <TodoForm />
        <TodoList />
      </div>
    </div>
  )
}

export default App
