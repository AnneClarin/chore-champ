import { useState } from "react";

import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import './AuthPage.css';

export default function AuthPage({ setUser }) {
    const [showLogin, setShowLogin] = useState(true);

    function makeStyle() {
        if (showLogin) {
            return { border: "5px solid blue", outline: "5px solid red", color: "red"}
        } else {
            return { border: "5px solid red", outline: "5px solid blue", color: "blue"}
        }
    }
    return (
        <main className='AuthPage'>
            <div style={makeStyle()}>
                <h3 onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'Sign Up?' : 'Log In?'}</h3>
            </div>
            {showLogin ? <LoginForm setUser={setUser} /> : <SignUpForm setUser={setUser} />}
        </main>
    )
};