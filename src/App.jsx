
import './App.css'
import AddTodo from './Components/AddTodos'
import Todo from './Components/Todo'

function App() {

  return (
    <>
     <h1 className=' border-l-amber-700 font-extrabold text-4xl' >ToDo App</h1>
     <AddTodo/>
     <Todo/>
    </>
  )
}

export default App
