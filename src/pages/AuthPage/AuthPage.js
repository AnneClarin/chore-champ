import { useState } from "react";

import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import './AuthPage.css';

export default function AuthPage({ setUser }) {
    const [showLogin, setShowLogin] = useState(true);

    return (
        <main className='AuthPage'>
            <div>
                <h2 onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'Sign Up' : 'Log In'}</h2>
            </div>
            {showLogin ? <LoginForm setUser={setUser} /> : <SignUpForm setUser={setUser} />}
        </main>
    )
};