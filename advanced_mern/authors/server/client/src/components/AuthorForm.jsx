import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';

import axios from 'axios';

import { useState } from "react";
import { useNavigate, Link } from 'react-router-dom';

const AuthorForm = (props) => {
    const { addAuthor } = props;
    const navigate = useNavigate();

    // Form input state data.
    const [name, setName] = useState("");
    const [err, setErr] = useState("");

    // Form handler
    const formHandler = (e) => {
        e.preventDefault();
        console.log({name})
        createAuthor({name})
    }

    // Create Author Api request.
    const createAuthor = (author) => {
        console.log(author);
        axios.post('http://localhost:8000/api/authors', {name})
            .then((response) => {
                console.log(response.data)
                addAuthor(response.data)
                navigate('/authors')
                setName("")
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

export default AuthorForm