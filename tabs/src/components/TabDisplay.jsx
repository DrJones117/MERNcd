const TabDisplay  = (props) => {
    const {index} = props;
    const {setSelected} = props;
    const {selected} = props;
    const {label} = props;

    const buttonHandler = () => {
        setSelected(index);
        
    }

        return (
                selected === index ? <button onClick={buttonHandler} style={{height: "50px", width: "100px", backgroundColor: "black", color: "white"}}>{label}</button>
                : <button onClick={buttonHandler} style={{height: "50px", width: "100px", backgroundColor: "white", color: "black"}}>{label}</button>
        );
};

export default TabDisplay