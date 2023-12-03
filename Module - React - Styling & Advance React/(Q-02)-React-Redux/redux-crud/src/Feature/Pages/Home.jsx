import { useSelector } from "react-redux"

function Home() {
   // example of use of useSelector hook
   const { name } = useSelector((state) => state.user);
   return (
      <div>
         <img className="w3-image" src="https://www.w3schools.com/w3images/architect.jpg" alt="Architecture" width="1500" height="800"></img>
         <div className="w3-display-middle w3-margin-top w3-center">
            <h1 className="w3-xxlarge w3-text-white"><span className="w3-padding w3-black w3-opacity-min"><b>R.</b></span> <span className="w3-hide-small w3-text-light-grey">Architects</span></h1>
         </div>
         {/* Page content */}
         <div className="w3-content w3-padding" style={{ maxWidth: 1564 }}>
            {/* Project Section */}
            <div className="w3-container w3-padding-32" id="projects">
               <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">Projects</h3>
            </div>
            <div className="w3-row-padding">
               <div className="w3-col l3 m6 w3-margin-bottom">
                  <div className="w3-display-container">
                     <div className="w3-display-topleft w3-black w3-padding">Summer House</div>
                     <img src="https://www.w3schools.com/w3images/house5.jpg" alt="House" style={{ width: '100%' }} />
                  </div>
               </div>
               <div className="w3-col l3 m6 w3-margin-bottom">
                  <div className="w3-display-container">
                     <div className="w3-display-topleft w3-black w3-padding">Brick House</div>
                     <img src="https://www.w3schools.com/w3images/house2.jpg" alt="House" style={{ width: '100%' }} />
                  </div>
               </div>
               <div className="w3-col l3 m6 w3-margin-bottom">
                  <div className="w3-display-container">
                     <div className="w3-display-topleft w3-black w3-padding">Renovated</div>
                     <img src="https://www.w3schools.com/w3images/house3.jpg" alt="House" style={{ width: '100%' }} />
                  </div>
               </div>
               <div className="w3-col l3 m6 w3-margin-bottom">
                  <div className="w3-display-container">
                     <div className="w3-display-topleft w3-black w3-padding">Barn House</div>
                     <img src="https://www.w3schools.com/w3images/house4.jpg" alt="House" style={{ width: '100%' }} />
                  </div>
               </div>
            </div>
            <div className="w3-row-padding">
               <div className="w3-col l3 m6 w3-margin-bottom">
                  <div className="w3-display-container">
                     <div className="w3-display-topleft w3-black w3-padding">Summer House</div>
                     <img src="https://www.w3schools.com/w3images/house2.jpg" alt="House" style={{ width: '99%' }} />
                  </div>
               </div>
               <div className="w3-col l3 m6 w3-margin-bottom">
                  <div className="w3-display-container">
                     <div className="w3-display-topleft w3-black w3-padding">Brick House</div>
                     <img src="https://www.w3schools.com/w3images/house3.jpg" alt="House" style={{ width: '99%' }} />
                  </div>
               </div>
               <div className="w3-col l3 m6 w3-margin-bottom">
                  <div className="w3-display-container">
                     <div className="w3-display-topleft w3-black w3-padding">Renovated</div>
                     <img src="https://www.w3schools.com/w3images/house5.jpg" alt="House" style={{ width: '99%' }} />
                  </div>
               </div>
               <div className="w3-col l3 m6 w3-margin-bottom">
                  <div className="w3-display-container">
                     <div className="w3-display-topleft w3-black w3-padding">Barn House</div>
                     <img src="https://www.w3schools.com/w3images/house4.jpg" alt="House" style={{ width: '99%' }} />
                  </div>
               </div>
            </div>
            {/* About Section */}
            <div className="w3-container w3-padding-32" id="about">
               <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">About</h3>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
               </p>
            </div>
            <div className="w3-row-padding w3-grayscale">
               <div className="w3-col l3 m6 w3-margin-bottom">
                  <img src="https://www.w3schools.com/w3images/team2.jpg" alt="John" style={{ width: '100%' }} />
                  <h3>{name}</h3>
                  <p className="w3-opacity">CEO &amp; Founder</p>
                  <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                  <p><button className="w3-button w3-light-grey w3-block">Contact</button></p>
               </div>
               <div className="w3-col l3 m6 w3-margin-bottom">
                  <img src="https://www.w3schools.com/w3images/team1.jpg" alt="Jane" style={{ width: '100%' }} />
                  <h3>Jane Doe</h3>
                  <p className="w3-opacity">Architect</p>
                  <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                  <p><button className="w3-button w3-light-grey w3-block">Contact</button></p>
               </div>
               <div className="w3-col l3 m6 w3-margin-bottom">
                  <img src="https://www.w3schools.com/w3images/team3.jpg" alt="Mike" style={{ width: '100%' }} />
                  <h3>Mike Ross</h3>
                  <p className="w3-opacity">Architect</p>
                  <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                  <p><button className="w3-button w3-light-grey w3-block">Contact</button></p>
               </div>
               <div className="w3-col l3 m6 w3-margin-bottom">
                  <img src="https://www.w3schools.com/w3images/team4.jpg" alt="Dan" style={{ width: '100%' }} />
                  <h3>Dan Star</h3>
                  <p className="w3-opacity">Architect</p>
                  <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                  <p><button className="w3-button w3-light-grey w3-block">Contact</button></p>
               </div>
            </div>
            {/* Contact Section */}
            <div className="w3-container w3-padding-32" id="contact">
               <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">Contact</h3>
               <p>Lets get in touch and talk about your next project.</p>
               <form action="/action_page.php" target="_blank">
                  <input className="w3-input w3-border" type="text" placeholder="Name" required name="Name" />
                  <input className="w3-input w3-section w3-border" type="text" placeholder="Email" required name="Email" />
                  <input className="w3-input w3-section w3-border" type="text" placeholder="Subject" required name="Subject" />
                  <input className="w3-input w3-section w3-border" type="text" placeholder="Comment" required name="Comment" />
                  <button className="w3-button w3-black w3-section" type="submit">
                     <i className="fa fa-paper-plane" /> SEND MESSAGE
                  </button>
               </form>
            </div>
            {/* Image of location/map */}
            <div className="w3-container">
               <img src="https://www.w3schools.com/w3images/map.jpg" className="w3-image" style={{ width: '100%' }} />
            </div>
            {/* End page content */}
         </div>
      </div>
   )
}
export default Home