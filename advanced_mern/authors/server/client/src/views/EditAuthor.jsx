import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';

import { useParams, useNavigate, Link  } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios'

export default (props) => {
    const { updateAuthor } = props;

    const { id } = useParams();
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [err, setErr] = useState("");

    // Gets the data from the id the user clicked on.
    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then(({data}) => {
                setName(data.name)
            })
            .catch((err) => console.log(err))
    }, [])

    // Form Handler
    const formHandler = (e) => {
        e.preventDefault();
        editAuthor({name})
    }

    // Edit Author Api request.
    const editAuthor = (author) => {
        axios.patch(`http://localhost:8000/api/authors/${id}`, author)
            .then(({data}) => {
                console.log(data);
                updateAuthor(data, id);
                navigate('/authors');
                setName("");
            })
            .catch(err => {
                console.log(err.response.data.message)
                setErr(err.response.data.message)
            })
    }

    return (
        <>
            <div className="mt-4">
                {err ? <p style={{color:"red"}}>{err}</p> : <p className="mb-1">Add an Author</p>}
                <form onSubmit={formHandler}>
                    <input className="mb-2" placeholder="Author Name" type="text" value={name} onChange={e => setName(e.target.value)} />
                    <div>
                        <Link to={`/authors`} className="me-2">Cancel</Link>
                        <Button>Submit</Button>
                    </div>
                </form>
            </div>
        </>
    );
}