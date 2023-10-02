/* eslint-disable eqeqeq */
/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';

function SignUp() {
    const [data, setData] = useState({
        username: "",
        email: "",
        phone: "",
        password: ""
    })
    const onchange = (e) => {
        setData({ ...data, id: new Date().getTime().toString(), [e.target.name]: e.target.value });
        console.log(data);
    }
    function validation() {
        var result = true;
        if (data.username == "") {
            alert('username is empty');
            result = false;
        }
        if (data.email == "") {
            alert('email is empty');
            result = false;
        }

        if (data.phone == "") {
            alert('phone is empty');
            result = false;
        }
        if (data.password == "") {
            alert('password is empty');
            result = false;
        }
        return result;
    }
    const onsubmit = async (e) => {
        e.preventDefault();
        if (validation()) {
            const res = await axios.post(`http://localhost:3000/user`, data);
            if (res.status == 201) {
                alert('success');
                setData({ ...data, username: "", email: "", phone: "", password: "" });
            }
        }
    }
    return (
        <div>
            <div className="container" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: 100 }}>
                <div className="row " >
                    <div className="col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1">
                        <div className="panel-body">
                            <form role="form" style={{ width: "300px", marginTop: 20, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                <h5>Enter Details to SignUp</h5>
                                <div className="form-group input-group" style={{ padding: 10 }}>
                                    <span className="input-group-addon"><i className="fa fa-tag" /></span>
                                    <input type="text" value={data.username} name='username' className="form-control" onChange={onchange} placeholder="User Name " />
                                </div>
                                <div className="form-group input-group" style={{ padding: 10 }}>
                                    <span className="input-group-addon"><i className="fa fa-tag" /></span>
                                    <input type="email" value={data.email} className="form-control" name='email' onChange={onchange} placeholder="Your Email " />
                                </div>
                                <div className="form-group input-group" style={{ padding: 10 }}>
                                    <span className="input-group-addon"><i className="fa fa-tag" /></span>
                                    <input type="number" value={data.phone} className="form-control" name='phone' onChange={onchange} placeholder="Your phone " />
                                </div>
                                <div className="form-group input-group" style={{ padding: 10 }}>
                                    <span className="input-group-addon"><i className="fa fa-lock" /></span>
                                    <input type="password" value={data.password} className="form-control" name='password' onChange={onchange} placeholder="Your Password" />
                                </div>
                                <Link to="/profile" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                                    <button type='submit' onClick={onsubmit} className="btn btn-primary w-100 py-3">SignUp</button>
                                </Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp