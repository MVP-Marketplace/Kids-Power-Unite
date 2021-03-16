import React, { useContext, useCallback } from "react"
import { withRouter, Redirect } from "react-router"
import app from "../firebase"
import { AuthContext } from "../Auth"
import firebase from "firebase/app";
import "firebase/auth";

const Login = ({history}) => {
    const handleLogin = useCallback(async event => {
            event.preventDefault()
            const { email, password } = event.target.elements
            try {
                await app
                    .auth()
                    .signInWithEmailAndPassword(email.value, password.value)
                history.push('/')
            } catch (error) {
                alert (error)
            }
        }, [history])

    const handleGoogleLogin = () =>{
       const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
       app.auth().signInWithPopup(googleAuthProvider);
    };

    const handleFacebookLogin = () =>{
        const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
        app.auth().signInWithPopup(facebookAuthProvider);
    };

    const { currentUser } = useContext(AuthContext)

    if (currentUser) {
        return <Redirect to='/' />
    }

    return (
        <div>
            <h1>Log in</h1>
            <form onSubmit={handleLogin}>
                <label>
                    Email
                    <input name='email' type='email' placeholder='Email' />
                </label>
                <label>
                    Password
                    <input name='password' type='password' placeholder='Password' />
                </label>
                <button type='submit'>Log in</button>
                <button onClick={handleFacebookLogin}>Sign in with Facebook</button>
                <button onClick={handleGoogleLogin}>Sign in with google</button>
            </form>
        </div>
    )
}

export default withRouter(Login)