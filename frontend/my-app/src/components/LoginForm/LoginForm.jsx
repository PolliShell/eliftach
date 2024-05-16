import React, { useState } from 'react';
import axios from 'axios';
import '../FormStyles/FormStyles.module.css';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/auth/login', { username, password });
            if (response.data.loggedIn) {
                // Handle successful login
                console.log("Logged in successfully!");
            } else {
                // Handle login failure
                console.log("Login failed:", response.data.status);
            }
        } catch (error) {
            console.error("Error during login:", error);
        }
    };

    return (
        <div className="form-container">
            <form onSubmit={handleLogin}>
                <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginForm;