import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Footer from "./Comps/Footer"
import About from "./Pages/About";
import Service from "./Pages/Service";
import Room from "./Pages/Room";
import Team from "./Comps/Team";
import Contact from "./Pages/Contact";
import Header from "./Comps/Header";
import Booking from "./Pages/Booking";
import OurTeam from "./Pages/OurTeam";
import Testimonial from "./Pages/Testimonial";
import { ToastContainer } from 'react-toastify';
import SignUp from "./Pages/SignUp";
import Login from './Pages/Login'
import Profile from './Pages/Profile'
import 'react-toastify/dist/ReactToastify.css'
// import Header2 from './Comps/Header2';
function App() {
  return (
    <BrowserRouter>
      <ToastContainer></ToastContainer>

      <Routes>
        <Route exact path="/" element={<>  <Header /><Home /> <Team />   <Footer /></>}></Route>
        <Route exact path="/about" element={<>  <Header /><About /> <Team />   <Footer /></>}></Route>
        <Route exact path="/service" element={<>  <Header /><Service /> <Team />  <Footer /> </>}></Route>
        <Route exact path="/rooms" element={<> <Header /> <Room />  <Footer /> </>}></Route>
        <Route exact path="/booking" element={<> <Header /> <Booking />  <Footer /> </>}></Route>
        <Route exact path="/team" element={<>  <Header /><OurTeam />   <Footer /></>}></Route>
        <Route exact path="/testimonial" element={<> <Header /> <Testimonial />  <Footer /> </>}></Route>
        <Route exact path="/contact" element={<>  <Header /><Contact />  <Footer /> </>}></Route>
        <Route exact path="/signup" element={<> <Header /> <SignUp />   <Footer /></>}></Route>
        <Route exact path="/login" element={<>  <Header /><Login />  <Footer /> </>}></Route>
        <Route exact path="/profile" element={<><Header /><Profile />  <Footer /></>}></Route>
        <Route exact path="/header2" element={<><Header /><h2 className="d-flex justify-content-center align-items-center mt-5">LogOut SuccessFully</h2><Footer /></>}></Route>
      </Routes>

    </BrowserRouter>

  );
}

export default App;
