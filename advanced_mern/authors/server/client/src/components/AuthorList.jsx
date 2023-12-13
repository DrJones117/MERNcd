import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap'

import { Link } from 'react-router-dom';
import axios from 'axios'

const AuthorList = (props) => {
    const { authors } = props;
    const { removeFromDom } = props;

    const deleteAuthor = (id) => {
        axios.delete(`http://localhost:8000/api/authors/${id}`)
            .then(response => {
                removeFromDom(id)
            })
            .catch(err => console.error(err));
    }

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
                {authors.map( (author, idx) => {
                    return <tr key={idx}>
                                <td>{author.name}</td>
                                <td className="d-flex">
                                    <Link to={`/authors/${author._id}/update`} className="me-3">Edit</Link>
                                    <Button onClick={() => {deleteAuthor(author._id)}}>Delete</Button>
                                </td>
                            </tr>
                })}
            </tbody>
        </table>
        </>
    );
}

export default AuthorList