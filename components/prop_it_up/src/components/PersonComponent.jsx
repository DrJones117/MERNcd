import React from 'react'

const PersonComponent = (props) => {
    return(
        <>
            <div>
                <h1>{props.firstName}, {props.lastName}</h1>
                <p>Age: {props.age}</p>
                <p>Hair: {props.hair}</p>
            </div>
        </>
    );
}

export default PersonComponent