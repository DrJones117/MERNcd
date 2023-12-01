import Box from "./Box";

const BoxDisplay = (props) => {
    const {boxes} = props;

    return (
        <>
        <div style={{width: "900px", display: "flex", flexWrap: "wrap"}}>
            {
                boxes.map((box, idx) => 
                    <Box key = {idx} box = {box}/>
                )
            }
        </div>
        </>
    );
}

export default BoxDisplay;