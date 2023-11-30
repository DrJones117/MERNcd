import React from 'react'
import { useState } from 'react'

const PersonComponent = (props) => {
    const [count, setCount] = useState(props.age)
    return(
        <>
            <div>
                <h1>{props.firstName}, {props.lastName}</h1>
                <p>Age: {count}</p>
                <p>Hair: {props.hair}</p>
                <button onClick = {() => setCount((count) => count + 1)}>Birthday Btn (increments age by 1)</button>
            </div>
        </>
    );
}

export default PersonComponent