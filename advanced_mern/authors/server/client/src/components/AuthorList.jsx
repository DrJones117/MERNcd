import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap'

const AuthorList = (props) => {
    const { authors } = props

    return (
        <>
        <table className="table w-50">
            <thead>
                <tr>
                    <th>Author</th>
                    <th>Actions available</th>
                </tr>
            </thead>
            <tbody>
                {authors.map( (product, idx) => {
                    return <tr key={idx}>
                                <td>{product.name}</td>
                                <td className="d-flex">
                                    <Button className="me-3">Edit</Button>
                                    <Button>Delete</Button>
                                </td>
                            </tr>
                })}
            </tbody>
        </table>
        </>
    );
}

export default AuthorList