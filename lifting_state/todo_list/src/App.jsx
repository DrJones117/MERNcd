import { useState } from 'react'
import TaskDisplay from './components/TaskDisplay'

function App() {
  const [tasks, setTasks] = useState([
    {task: "Do assignments", completed: false}, 
    {task: "Read ahead", completed: true}, 
    {task: "Play current game", completed: false}
  ])


  return (
    <>
      <h1>To Do</h1>
      <TaskDisplay tasks={tasks}/>
    </>
  )
}

export default App
