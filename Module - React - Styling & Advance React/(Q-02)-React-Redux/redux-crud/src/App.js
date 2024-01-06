import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Feature/Component/Header';
import Footer from './Feature/Component/Footer';
import Home from './Feature/Pages/Home';
import Login from './Feature/Pages/Login';
import User from './Feature/Pages/User';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    // Routing
    <BrowserRouter>
      {/* toast */}
      <ToastContainer></ToastContainer>
      <Routes>
        <Route path="/" element={<><Header /><Home /><Footer /></>}></Route>
        <Route path="/login" element={<><Header /><Login /><Footer /></>}></Route>
        <Route path="/user" element={<><Header /><User /><Footer /></>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
