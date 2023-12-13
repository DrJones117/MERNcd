import React, { useState, useEffect } from 'react'
import axios from 'axios'
import AuthorList from "../components/AuthorList";

export default (props) => {
    const { authors } = props;
    const { setAuthors } = props;
    const { loaded } = props;

    const removeFromDom = (id) => {
        setAuthors(authors.filter(author => author._id != id));
    }

    return (
        <>
            {loaded && <AuthorList authors={authors} removeFromDom={removeFromDom}/>}
        </>
    );
}