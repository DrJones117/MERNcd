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
                            {completed ? <p style={{textDecoration: "line-through"}}>{task}</p> : <p>{task}</p>}

                            {
                                <input type="checkbox" checked = {completed} onChange={() => completeTask(index)}/>
                            }
                        </div>
                            <button id={index} style={{height: "30px", marginTop: "10px", backgroundColor: "red"}} onClick={(e) => deleteTask(e.target.id)}>Delete</button>
                        </li>
                </div>
                )
            }
        </>
    );
}

export default TaskDisplay