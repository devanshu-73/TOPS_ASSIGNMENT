import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const Admin = lazy(() => import('./Admin/Admin'));

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/admin">Admin</Link>
            </li>
          </ul>
        </nav>

        <hr />

        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/admin/*" element={<Admin />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
