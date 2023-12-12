import React, { useState, useEffect } from 'react'
import axios from 'axios'
import AuthorList from "../components/AuthorList";

export default () => {
    const [authors, setAuthors] = useState([]);
    const [loaded, setLoaded] = useState(false);

    const getAuthors = () => {
        axios.get('http://localhost:8000/api/authors')
        .then(response => {
            console.log(response.data);
            setAuthors(response.data);
            setLoaded(true);
        })
        .catch(err => console.log(err))
    }

    useEffect(() => {getAuthors()}, []);

    return (
        <>
            <AuthorList authors={authors}/>
        </>
    );
}