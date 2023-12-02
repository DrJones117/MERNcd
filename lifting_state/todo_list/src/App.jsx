import { useState } from 'react'
import TaskDisplay from './components/TaskDisplay'
import TaskForm from './components/TaskForm'

function App() {
  const [tasks, setTasks] = useState([
    {task: "Do assignments", completed: false}, 
    {task: "Read ahead", completed: false}, 
    {task: "Play current game", completed: false}
  ])

  console.log({tasks})

  const completeTask = (index) => {
    const newTasks = tasks.map((task, idx) =>
      idx != index ? task : {...task, completed: !task.completed}
    );

    setTasks(newTasks)
  }

  const deleteTask = ({index}) => {
    setTasks(tasks.filter((task, idx) => idx != index))
    console.log({tasks})
}
  

  const addTask = (task) => setTasks([...tasks, task])


  return (
    <>
      <TaskForm addTask={addTask}/>
      <h1>To Do</h1>
      <TaskDisplay tasks={tasks} completeTask={completeTask} setTasks={setTasks} deleteTask={deleteTask}/>
    </>
  )
}

export default App
