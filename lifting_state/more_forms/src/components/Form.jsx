import { useState } from 'react'

const Form = (props) => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false)

    const createUser = (e) => {
        e.preventDefault();

        const newUser = {firstName, lastName, email, password, confirmPassword}
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");

        setHasBeenSubmitted( true );
    };

    const subMessage = () => {
        if ( hasBeenSubmitted ) {
            return "Thanks for submitting the form";
        } else {
            return "Welcome, please submit the form."
        }
    };

    const fNameMessage = () => {
        if (firstName.length < 2 && firstName.length > 0) {
            return "First Name should be at least 2 characters long."
        }
    }

    const lNameMessage = () => {
        if (lastName.length < 2 && lastName.length > 0) {
            return "Last Name should be at least 2 characters long."
        }
    }

    const emailMessage = () => {
        if (email.length < 5 && email.length > 0) {
            return "Email should be at least 5 characters long."
        }
    }

    const passwordMessage = () => {
        if (password.length < 8 && password.length > 0) {
            return "Password should be at least 8 characters long."
        }
    }

    const confirmMessage = () => {
        if (password !== confirmPassword && password.length > 0 || confirmPassword.length > 0) {
            return "Passwords must match."
        }
    }


    return (
        <>
        <h1>Create User</h1>
            <form onSubmit={ createUser }>
                <h3>{ subMessage() }</h3>
                <p>{ fNameMessage() }</p>
                <p>{ lNameMessage() }</p>
                <p>{ emailMessage() }</p>
                <p>{ passwordMessage() }</p>
                <p>{ confirmMessage() }</p>
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
                    <input id="password" type="password" value={password} onChange = { (e) => {
                        console.log(e.target.value)
                        setPassword(e.target.value) 
                    } } />
                </div>

                <div>
                    <label>Confirm Password: </label>
                    <input id="confirmPassword" type="password" value={confirmPassword} onChange = { (e) => {
                        console.log(e.target.value)
                        setConfirmPassword(e.target.value) 
                    } } />
                </div>

                <input id="submitBtn" type="submit" value="Create User"/>
            </form>
            <p>Live data: { firstName } {lastName} {email} {password} {confirmPassword}</p>
        </>
    );
}

export default Form