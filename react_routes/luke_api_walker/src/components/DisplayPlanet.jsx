import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';


const DisplayPlanet = () => {
    const [name, setName] = useState("");
    const [climate, setClimate] = useState("");
    const [terrain, setTerrain] = useState("");
    const [water, setWater] = useState("");
    const [population, setPopulation] = useState("")
    const { number } = useParams();
    
    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${number}`)
        .then(response => {
            console.log(response)
            setName(response.data.name);
            setClimate(response.data.climate)
            setTerrain(response.data.terrain)
            setWater(response.data.surface_water)
            setPopulation(response.data.population)
        })
        .catch(err => console.log(err = "These aren't the Droids you're looking for. https://th.bing.com/th/id/OIP.J7Kmtok0f2mQT7iX_JA_5QHaE8?rs=1&pid=ImgDetMain" ))
        }, [number]);


    return(
        <>
            <h2>{name}</h2>
            <p>Climate: {climate}</p>
            <p>Terrain: {terrain}</p>
            <p>Surface Water: {water}</p>
            <p>Population: {population}</p>
        </>
    );
}

export default DisplayPlanet