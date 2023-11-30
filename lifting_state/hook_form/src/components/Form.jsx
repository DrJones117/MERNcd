import { useState } from 'react'

const Form = (props) => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const creatUser = (e) => {
        e.preventDefault();

        const newUser = {firstName, lastName, email, password, confirmPassword}
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    }

    return (
        <>
            <h1>Create a User</h1>
            <form>
                <div>
                    <label>First Name: </label>
                    <input type="text" value={firstName} onChange = { (e) => setFirstName(e.target.value)} />
                </div>

                <div>
                    <label>Last Name: </label>
                    <input type="text" value={lastName} onChange = { (e) => setLastName(e.target.value)} />
                </div>

                <div>
                    <label>Email: </label>
                    <input type="text" value={firstName} onChange = { (e) => setFirstName(e.target.value)} />
                </div>

                <div>
                    <label>Password: </label>
                    <input type="text" value={firstName} onChange = { (e) => setFirstName(e.target.value)} />
                </div>

                <div>
                    <label>Confirm Password: </label>
                    <input type="text" value={firstName} onChange = { (e) => setFirstName(e.target.value)} />
                </div>

                <input type="submit" value="Create User"/>
            </form>
        </>
    );
}

export default Form