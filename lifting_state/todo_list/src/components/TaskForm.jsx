import { useState } from "react";

const TaskForm = (props) => {
    const {addTask} = props;

    const [task, setTask] = useState("");
    const [errors, setErrors] = useState([]);

    const buttonHandler = (e) => {
        e.preventDefault();
        const errs = [];

        if (task.length < 5) {
            errs.push("Task must have at least five characters.")
        }

        if (errs.length === 0) {
            setErrors([]);
            setTask("");
            addTask({task, completed: false});
        } else {
            setErrors(errs);
        }


    }

    return (
        <>
            <h1>Add a Task</h1>
            {
                errors.map((error, index) => 
                    <p key={index} style={{color: "red"}}>{error}</p>
                )
            }
            <form onSubmit={buttonHandler}>
                <label>Task Name</label>
                <input  type="text" onChange={(e) => setTask(e.target.value)} value={task}/>
                <button type="submit" style={{backgroundColor: "blue", color: "white"}}>Add</button>
            </form>
        </>
    );
}

export default TaskForm