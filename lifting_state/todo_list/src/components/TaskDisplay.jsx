const TaskDisplay = (props) => {
    const {tasks} = props;
    const {deleteTask} = props;
    const {completeTask} = props;

    return (
        <>
            {
                tasks.map( ({task, completed}, index) => 
                <div key={index} style={{height: "50px", width: "250px", alignItems: "center"}}>
                        <li style={{display: "flex", justifyContent: "space-between"}}> 
                        <div style={{display: "flex", justifyContent: "space-between", width: "150px"}}>
                            <p>{task}</p>

                            {
                                <input type="checkbox" checked = {completed} onChange={() => completeTask(index)}/>
                            }
                        </div>
                            <button style={{height: "30px", marginTop: "10px", backgroundColor: "red"}}>Delete</button>
                        </li>
                </div>
                )
            }
        </>
    );
}

export default TaskDisplay