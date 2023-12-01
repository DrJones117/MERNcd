import { useState } from 'react'

const Box = (props) => {
    return (
        <form>
            <label className='primary'>Color: </label>
            <input type="text"/>
        </form>
    );
}

export default Box;