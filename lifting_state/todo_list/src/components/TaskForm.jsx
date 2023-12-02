import { useState } from "react";

const TaskForm = (props) => {
    const {addTask} = props;

    const [task, setTask] = useState("");
    const [errors, setErrors] = useState("");

    const buttonHandler = (e) => {
        e.preventDefault();
        const errs = [];
        
        setTask("");
        addTask({task, completed: false})


    }

    return (
        <>
            <h1>Add a Task</h1>
            <form onSubmit={buttonHandler}>
                <label>Task Name</label>
                <input  type="text" onChange={(e) => setTask(e.target.value)} value={task}/>
                <button type="submit" style={{backgroundColor: "blue", color: "white"}}>Add</button>
            </form>
        </>
    );
}

export default TaskForm