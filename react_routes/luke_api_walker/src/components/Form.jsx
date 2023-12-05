import { useState } from "react";


const Form = (props) => {
    const {navigate} = props;
    const [select, setSelect] = useState("");
    const [number, setNumber] = useState("");
    
    const buttonHandler = (e) => {
        e.preventDefault();

        navigate(`/${select}/${number}`)
        setSelect("");
        setNumber("");
    }

    return (
        <form onSubmit={buttonHandler}>
            <label htmlFor="select">Search for:</label>
            <select name="select" defaultValue="test" onChange={(e) => setSelect(e.target.value)}>
                <option disabled value="test">Pick a category</option>
                <option value="planets">planets</option>
                <option value="people">people</option>
            </select>
            <label htmlFor="number">Id:</label>
            <input type="number" name="number" value={ number } onChange={(e) => setNumber(e.target.value)}></input>
            <button type="submit">Search</button>
        </form>
    );
}

export default Form