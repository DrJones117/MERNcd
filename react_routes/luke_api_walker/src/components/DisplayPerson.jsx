import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';


const DisplayPerson = () => {
    const [name, setName] = useState("");
    const [height, setHeight] = useState("");
    const [mass, setMass] = useState("");
    const [hairColor, setHairColor] = useState("");
    const [skinColor, setskinColor] = useState("");
    const { number } = useParams();
    
    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${number}`)
        .then(response => {
            setName(response.data.name);
            setHeight(response.data.height);
            setMass(response.data.mass);
            setHairColor(response.data.hair_color);
            setskinColor(response.data.skin_color);
        })
        .catch(err => console.log(err = "These aren't the Droids you're looking for. https://th.bing.com/th/id/OIP.J7Kmtok0f2mQT7iX_JA_5QHaE8?rs=1&pid=ImgDetMain" ))
        }, [number]);


    return(
        <>
            <h2>{name}</h2>
            <div>
                <p>Height: {height}</p>
                <p>Mass: {mass}</p>
                <p>Hair Color: {hairColor}</p>
                <p>Skin Color: {skinColor}</p>
            </div>
        </>
    );
}

export default DisplayPerson