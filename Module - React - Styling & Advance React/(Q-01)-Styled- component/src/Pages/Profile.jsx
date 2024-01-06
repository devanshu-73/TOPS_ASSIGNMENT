/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Profile() {
    const [formValue, setFormValue] = useState({
        username: "",
        email: "",
        phone: "",
        password: ""
    });

    useEffect(() => {
        fetch();
    }, []);

    const fetch = async () => {
        try {
            const res = await axios.get(`http://localhost:3000/user/${localStorage.getItem('uid')}`);
            setFormValue(res.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    const onchange = (e) => {
        setFormValue({ ...formValue, [e.target.name]: e.target.value });
    }

    function validation() {
        var result = true;
        if (formValue.username === "") {
            alert('username is empty');
            result = false;
        }
        if (formValue.email === "") {
            alert('email is empty');
            result = false;
        }

        if (formValue.phone === "") {
            alert('phone is empty');
            result = false;
        }
        if (formValue.password === "") {
            alert('password is empty');
            result = false;
        }
        return result;
    }

    const editData = async (e) => {
        e.preventDefault();
        if (validation()) {
            const res = await axios.patch(`http://localhost:3000/user/${formValue.id}`, formValue);
            if (res.status === 200) {
                alert('Update success');
            }
        }
    }     

    return (
        <div>
            <div className="container" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: 100 }}>
                <div className="row">
                    <div className="col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1">
                        <div className="panel-body">
                            <form role="form" style={{ width: "300px", marginTop: 20, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                <h5>Profile Page</h5>
                                <div className="form-group input-group" style={{ padding: 10 }}>
                                    <span className="input-group-addon"><i className="fa fa-tag" /></span>
                                    <input type="text" className="form-control" onChange={onchange} value={formValue.username} name="username" placeholder="Your UserName" />
                                </div>
                                <div className="form-group input-group" style={{ padding: 10 }}>
                                    <span className="input-group-addon"><i className="fa fa-tag" /></span>
                                    <input type="number" className="form-control" onChange={onchange} value={formValue.phone} name="phone" placeholder="Your Phone" />
                                </div>
                                <div className="form-group input-group" style={{ padding: 10 }}>
                                    <span className="input-group-addon"><i className="fa fa-tag" /></span>
                                    <input type="email" className="form-control" onChange={onchange} value={formValue.email} name="email" placeholder="Your Email" />
                                </div>

                                <div className="form-group input-group" style={{ padding: 10 }}>
                                    <span className="input-group-addon"><i className="fa fa-lock" /></span>
                                    <input type="password" className="form-control" onChange={onchange} value={formValue.password} name="password" placeholder="Your Password" />
                                </div>
                                <button type="button" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} onClick={editData} className="btn btn-primary">Edit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;
