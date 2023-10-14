// src/Admin/Admin.js
import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import AdminUser from './AdminUser';

function Admin() {
    return (
        <div>
            <h2>Admin Dashboard</h2>
            <nav>
                <ul>
                    <li>
                        <Link to="/admin/user">Admin User</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/admin/user" component={AdminUser} />
            </Routes>
        </div>
    );
}

export default Admin;
