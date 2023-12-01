import { useState } from 'react'

const BoxForm = ({addToBoxes}) => {

    const [box, setBox] = useState("");

    const addBox = (e) => {
        e.preventDefault();
        addToBoxes(box);
        setBox("");
    }

    return (
        <form onSubmit={addBox}>
            <label className='primary'>Color: </label>
            <input id="color" type="text" value={box} onChange = { (e) => {setBox(e.target.value) } } />
            <button type="submit">Add</button>
        </form>
    );
}

export default BoxForm;