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
        setFirstName(console.log(firstName));
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    }

    return (
        <>
            <h1>Create a User</h1>
            <form onSubmit={ creatUser }>
                <div>
                    <label>First Name: </label>
                    <input id="firstName" type="text" value={firstName} 
                        onChange = { (e) => {
                            console.log(e.target.value)
                            setFirstName(e.target.value)  
                        } } />
                </div>

                <div>
                    <label>Last Name: </label>
                    <input id="lastName" type="text" value={lastName} onChange = { (e) => {
                        console.log(e.target.value)
                        setLastName(e.target.value)
                    } } />
                </div>

                <div>
                    <label>Email: </label>
                    <input id="email" type="text" value={email} onChange = { (e) => {
                        console.log(e.target.value)
                        setEmail(e.target.value) 
                    } } />
                </div>

                <div>
                    <label>Password: </label>
                    <input id="password" type="text" value={password} onChange = { (e) => {
                        console.log(e.target.value)
                        setPassword(e.target.value) 
                    } } />
                </div>

                <div>
                    <label>Confirm Password: </label>
                    <input id="confirmPassword" type="text" value={confirmPassword} onChange = { (e) => {
                        console.log(e.target.value)
                        setConfirmPassword(e.target.value) 
                    } } />
                </div>

                <input id="submitBtn" type="submit" value="Create User"/>
            </form>
        </>
    );
}

export default Form