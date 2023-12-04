const Form = (props) => {
    return (
        <form>
            <label for="select">Search for:</label>
            <select name="select">
                <option>Planet</option>
                <option>Person</option>
            </select>
            <label for="number">Id:</label>
            <input type="number" name="number"></input>
            <button type="submit">Search</button>
        </form>
    );
}

export default Form