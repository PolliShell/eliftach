import React, { useState } from 'react';
import axios from 'axios';
import '../FormStyles/FormStyles.module.css';

const SignupForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullName] = useState('');
    const [birthDate, setBirthDate] = useState('');

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/auth/signup', { username, password, full_name: fullName, birth_date: birthDate });
            if (response.data.loggedIn) {
                // Handle successful signup
                console.log("Signed up successfully!");
            } else {
                // Handle signup failure
                console.log("Signup failed:", response.data.status);
            }
        } catch (error) {
            console.error("Error during signup:", error);
        }
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSignup}>
                <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <input type="text" placeholder="Full Name" value={fullName} onChange={(e) => setFullName(e.target.value)} />
                <input type="text" placeholder="Birth Date" value={birthDate} onChange={(e) => setBirthDate(e.target.value)} />
                <button type="submit">Signup</button>
            </form>
        </div>
    );
};

export default SignupForm;
