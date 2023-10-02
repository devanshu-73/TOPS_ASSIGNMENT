/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3000/user');
            const userData = await response.json();

            const user = userData.find((user) => user.username === username && user.password === password);

            if (user) {
                alert('Login successful');
                navigate('/profile');
                // localStorage.setItem("username", username);

                localStorage.setItem("uid", user.id);
                
                // localStorage.setItem("phone", user.phone);
                // localStorage.setItem("email", user.email);
                // localStorage.setItem("password", password);
            } else {
                alert('Login failed');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <>
            <div>
                <div className="container" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: 100 }}>
                    <div className="row ">
                        <div className="col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1">
                            <div className="panel-body">
                                <form role="form" style={{ width: "300px", marginTop: 20, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                    <h5>Enter Details to Login</h5>
                                    <div className="form-group input-group" style={{ padding: 10 }}>
                                        <span className="input-group-addon"><i className="fa fa-tag" /></span>
                                        <input type="text" className="form-control" value={username} onChange={handleUsernameChange} />
                                    </div>

                                    <div className="form-group input-group" style={{ padding: 10 }}>
                                        <span className="input-group-addon"><i className="fa fa-lock" /></span>
                                        <input type="password" className="form-control" value={password} onChange={handlePasswordChange} />
                                    </div>
                                    {/* Use the navigate function to navigate to the profile page */}
                                    <button type="button" onClick={handleLogin} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} className="btn btn-primary">
                                        Login Now
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
