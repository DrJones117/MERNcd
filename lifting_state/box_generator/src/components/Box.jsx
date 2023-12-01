const Box = ({box}) => {
    return (
        <>
            {<div style={{height: "100px", width: "100px", backgroundColor: box, margin: "10px"}}></div>}
        </>
    );
}

export default Box;