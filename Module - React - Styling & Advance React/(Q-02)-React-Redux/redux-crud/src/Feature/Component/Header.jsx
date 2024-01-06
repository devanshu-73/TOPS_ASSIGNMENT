import { Link, NavLink } from "react-router-dom"

function Header() {
   return (
      <div>
         <div>
            {/* Navbar (sit on top) */}
            <div className="w3-top">
               <div className="w3-bar w3-white w3-wide w3-padding w3-card">
                  <Link to="/" className="w3-bar-item w3-button"><b>R.</b> Architects</Link>
                  {/* Float links to the right. Hide them on small screens */}
                  <div className="w3-right w3-hide-small">
                     <NavLink to="/login" className="w3-bar-item w3-button">Login</NavLink>
                     <NavLink to="/user" className="w3-bar-item w3-button">User</NavLink>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}
export default Header