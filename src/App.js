import React, { useState } from "react";
import "./App.css";
import Realestate from "./realestate";
import ToolsAdvice from "./toolsadvice";
import Infocard from "./infocard";
import SearchBar from "./SearchBar";
import { useNavigate } from "react-router-dom";

import { useEffect } from "react";
import "./pop_up.css";
function App() {

  let n = useNavigate();
  let [show_window,set_show_window] = useState(true);

  useEffect(()=>{

    if (show_window) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll"); // Cleanup
    };


    





  },[show_window]);

  let back_to_normal = ()=>{
    set_show_window(false);
    
  }

  if(show_window == true){
    
    return (
      <div>

<div className="my-block">
      <h2>WELCOME TO AARVASA</h2>
      <p>THIS WEBSITE IS UNDER CONSTRUCTION</p>
      <button id= "gh" onClick={back_to_normal}>PROCEED TO THE WEBSITE</button>
    </div>
      <div className="container containert" >
      {/*Hero*/}
      <main className="hero">
  <div className="hero-content">
    <h3>Welcome to Aarvasa</h3>
    <h1>Manage Your Property</h1>
    <p>
      Your will have everything nearby supermarkets, buses, stations, and
      more—all nearby!
    </p>
    <SearchBar />
  </div>
  <div className="hero-image">
    <img src="/Final ii 1.png" alt="Hero Image" />
  </div>

  {/* SVG Clouds */}
  <svg
    className="cloud"
    width="200"
    height="300"
    viewBox="0 0 64 32"
    style={{ top: "20px", left: "10%" }}
  >
    <ellipse cx="16" cy="16" rx="16" ry="8" />
    <ellipse cx="32" cy="16" rx="16" ry="8" />
    <ellipse cx="24" cy="12" rx="20" ry="10" />
  </svg>
  
  <svg
    className="cloud"
    width="180"
    height="90"
    viewBox="0 0 64 32"
    style={{ top: "10%", left: "40%" }}
  >
    <ellipse cx="16" cy="16" rx="16" ry="8" />
    <ellipse cx="32" cy="16" rx="16" ry="8" />
    <ellipse cx="24" cy="12" rx="20" ry="10" />
  </svg>
  <svg
    className="cloud"
    width="130"
    height="70"
    viewBox="0 0 64 32"
    style={{ bottom: "20px", left: "15%" }}
  >
    <ellipse cx="16" cy="16" rx="16" ry="8" />
    <ellipse cx="32" cy="16" rx="16" ry="8" />
    <ellipse cx="24" cy="12" rx="20" ry="10" />
  </svg>
  
  <svg
    className="cloud"
    width="400"
    height="300"
    viewBox="0 0 64 32"
    style={{ top: "70px", right: "40%" }}
  >
    <ellipse cx="16" cy="16" rx="16" ry="8" />
    <ellipse cx="32" cy="16" rx="16" ry="8" />
    <ellipse cx="24" cy="12" rx="20" ry="10" />
  </svg>
  <svg
    className="cloud"
    width="160"
    height="80"
    viewBox="0 0 64 32"
    style={{ top: "200px", left: "5%" }}
  >
    <ellipse cx="16" cy="16" rx="16" ry="8" />
    <ellipse cx="32" cy="16" rx="16" ry="8" />
    <ellipse cx="24" cy="12" rx="20" ry="10" />
  </svg>
</main>


{/* USP Section */}
<section className="usp">
  <h2>We’ve got properties for everyone</h2>
  <div className="usp-stats">
    <div className="stat-item">
      <img src="/image.png" alt="Owner Properties" />
      <h3>1022</h3>
      <h3>Owner Properties</h3>
      <h3 className="explore-link"><a href="/owner-properties">Explore →</a></h3>
    </div>
    <div className="stat-item">
      <img src="/image(3).png" alt="Projects" />
      <h3>182</h3>
      <h3>Projects</h3>
      <h3 className="explore-link"><a href="/projects">Explore →</a></h3>
    </div>
    <div className="stat-item">
      <img src="/image(2).png" alt="Ready to Move-In" />
      <h3>2364</h3>
      <h3>Ready to move-in</h3>
      <h3 className="explore-link"><a href="/ready-to-move-in">Explore →</a></h3>
    </div>
    <div className="stat-item">
      <img src="/image(1).png" alt="Budget Homes" />
      <h3>3222</h3>
      <h3>Budget Homes</h3>
      <h3 className="explore-link"><a href="/budget-homes">Explore →</a></h3>
    </div>
  </div>
</section>

{/**/}
<Infocard />

{/* Preferred Agents */}
<section className="agents">
  <h2>Aarvasa Preferred Agents in New Delhi</h2>
  <div className="agent-list">
    {/* Agent Card */}
    <div className="agent-cardp">
      {/* First Row */}
      <div className="card-row first-row">
        <img src="/image4.png" alt="Agent" className="agent-photo" />
        <div className="agent-headerapp">
          <h3>Av Preferred</h3>
          <h4>Vivek Kumar Mishra</h4>
        </div>
        <img src="/logo.png" alt="Badge" className="badge-logo" />
      </div>
      {/* Second Row */}
      <div className="card-row second-row">
        <div className="propertyapp-info">
          <img src="/image5.png" alt="MV Properties" className="propertyapp-logo" />
          <div className="propertyapp-details">
            <p>MV Properties</p>
            <p>Operating Since</p> 
            <p>2006</p>
          </div>
        </div>
        <div className="divider"></div>
        <div className="buyers-info">
          <p>Buyers Served</p>
          <p>2500+</p>
        </div>
      </div>
      {/* Third Row */}
      <div className="card-row third-row">
        <h3>45</h3>
        <span>Properties for Sale</span>
        <h3>3</h3>
        <span>Properties for Rent</span>
      </div>
    </div>
    <div className="agent-cardp">
      {/* First Row */}
      <div className="card-row first-row">
        <img src="/image4.png" alt="Agent" className="agent-photo" />
        <div className="agent-headerapp">
          <h3>Av Preferred</h3>
          <h4>Vivek Kumar Mishra</h4>
        </div>
        <img src="/logo.png" alt="Badge" className="badge-logo" />
      </div>
      {/* Second Row */}
      <div className="card-row second-row">
        <div className="propertyapp-info">
          <img src="/image5.png" alt="MV Properties" className="propertyapp-logo" />
          <div className="propertyapp-details">
            <p>MV Properties</p>
            <p>Operating Since 2006</p>
          </div>
        </div>
        <div className="divider"></div>
        <div className="buyers-info">
          <p>Buyers Served</p>
          <p>2500+</p>
        </div>
      </div>
      {/* Third Row */}
      <div className="card-row third-row">
        <h3>45</h3>
        <span>Properties for Sale</span>
        <h3>3</h3>
        <span>Properties for Rent</span>
      </div>
    </div>
    <div className="agent-cardp">
      {/* First Row */}
      <div className="card-row first-row">
        <img src="/image4.png" alt="Agent" className="agent-photo" />
        <div className="agent-headerapp">
          <h3>Av Preferred</h3>
          <h4>Vivek Kumar Mishra</h4>
        </div>
        <img src="/logo.png" alt="Badge" className="badge-logo" />
      </div>
      {/* Second Row */}
      <div className="card-row second-row">
        <div className="propertyapp-info">
          <img src="/image5.png" alt="MV Properties" className="propertyapp-logo" />
          <div className="propertyapp-details">
            <p>MV Properties</p>
            <p>Operating Since 2006</p>
          </div>
        </div>
        <div className="divider"></div>
        <div className="buyers-info">
          <p>Buyers Served</p>
          <p>2500+</p>
        </div>
      </div>
      {/* Third Row */}
      <div className="card-row third-row">
        <h3>45</h3>
        <span>Properties for Sale</span>
        <h3>3</h3>
        <span>Properties for Rent</span>
      </div>
    </div>
    <div className="agent-cardp">
      {/* First Row */}
      <div className="card-row first-row">
        <img src="/image4.png" alt="Agent" className="agent-photo" />
        <div className="agent-headerapp">
          <h3>Av Preferred</h3>
          <h4>Vivek Kumar Mishra</h4>
        </div>
        <img src="/logo.png" alt="Badge" className="badge-logo" />
      </div>
      {/* Second Row */}
      <div className="card-row second-row">
        <div className="propertyapp-info">
          <img src="/image5.png" alt="MV Properties" className="propertyapp-logo" />
          <div className="propertyapp-details">
            <p>MV Properties</p>
            <p>Operating Since 2006</p>
          </div>
        </div>
        <div className="divider"></div>
        <div className="buyers-info">
          <p>Buyers Served</p>
          <p>2500+</p>
        </div>
      </div>
      {/* Third Row */}
      <div className="card-row third-row">
        <h3>45</h3>
        <span>Properties for Sale</span>
        <h3>3</h3>
        <span>Properties for Rent</span>
      </div>
    </div>
  </div>
</section>


      

      {/*Bachelor's*/}
      <section className="Bachelor">
        <div className="absolute top-0 left-1/4 w-32 h-32 rounded-full bg-white opacity-10 blur-xl"></div>
        <div className="absolute top-10 left-1/2 w-24 h-24 rounded-full bg-white opacity-10 blur-xl"></div>
        <div className="absolute -top-10 right-1/4 w-40 h-40 rounded-full bg-white opacity-10 blur-xl"></div>

        <div className="bac-box">
          
          <p>Solving the</p>
          <div className="secnd-line">Unsolvable problem</div>
          <p className="third-line">with <span className="highlight">Aarvasa</span></p>
          <p className="bold">Now Property Available for <strong>BACHELOR'S</strong> 
          <div className="itali">also...</div>
          </p>

          <a href="/services" className="explore-link">Explore →</a>
        </div>
      </section>

      {/* Tools and Advice */}
      <ToolsAdvice />

      {/* Real Estate Guide Section */}
      <Realestate />

      <div class="post-propertyapp-container">
    <div class="left-side">
        <h3>Post your property for <div className="itali">Free...</div></h3>
        <p>List it on Aarvasa and get Genuine leads</p>
    </div>
    <div class="right-side">
        <button class="post-propertyapp-btn" onClick={()=>{
          n('/sell');
        }}>
            Post Property
            <span class="free-btn">Free</span>
        </button>
    </div>
</div>

      {/* Our Team */}
      <div class="appour-team">
      <h2>Our Team</h2>
      <div class="appteam-members">
          <div class="appteam-member">
              <div class="appimage-container">
                  <img src="/uday.jpg" alt="Team Member Image" />
                  <div class="social-media-container">
                  <a href="https://www.linkedin.com/in/udayprakashsahu/" target="_blank" class="social-icon">
                    <i class="fab fa-linkedin"></i>
                  </a>
                  <a href="http://x.com/udaysahu_" target="_blank" class="social-icon">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a href="http://instagram.com/uday.sahu_10" target="_blank" class="social-icon">
                    <i class="fab fa-instagram"></i>
                  </a>
          </div>
              </div>
              <div class="appinfo-container">
                  <p class="appname">Uday Prakash Sahu</p>
                  <p class="appdesignation">Founder & CEO</p>
              </div>
          </div>
          <div class="appteam-member">
              <div class="appimage-container">
                  <img src="/ansh2.jpg" alt="Team Member Image" />
                  <div class="social-media-container">
                  <a href="https://www.linkedin.com/in/ansh-dubey-526325273/" target="_blank" class="social-icon">
                    <i class="fab fa-linkedin"></i>
                  </a>
                  <a href="https://x.com/anshaarush?s=21" target="_blank" class="social-icon">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a href="https://www.instagram.com/ansh.dubey/?igsh=MTR0ZGxxaHRkcHZsZw%3D%3D&utm_source=qr" target="_blank" class="social-icon">
                    <i class="fab fa-instagram"></i>
                  </a>
          </div>
              </div>
              <div class="appinfo-container">
                  <p class="appname">Ansh Dubey</p>
                  <p class="appdesignation">Co-Founder & COO</p>
              </div>
          </div>
          <div class="appteam-member">
              <div class="appimage-container">
                  <img src="/lakshay.png" alt="Team Member Image" />
                  <div class="social-media-container">
                  <a href="https://www.linkedin.com/in/lakshya-phoolwani-44b807277?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" class="social-icon">
                    <i class="fab fa-linkedin"></i>
                  </a>
                  <a href="" target="_blank" class="social-icon">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a href="https://www.instagram.com/lakshya._.47?igsh=ZDYybjRsM2VtaXJ1" target="_blank" class="social-icon">
                    <i class="fab fa-instagram"></i>
                  </a>
          </div>
              </div>
              <div class="appinfo-container">
                  <p class="appname">Lakshya Phoolwani</p>
                  <p class="appdesignation">Chief Financial Officer (CFO)</p>
              </div>
          </div>
          <div class="appteam-member">
              <div class="appimage-container">
                  <img src="/archit.jpg" alt="Team Member Image" />
                  <div class="social-media-container">
                  <a href="https://www.linkedin.com/in/archit-agarwal03/" target="_blank" class="social-icon">
                    <i class="fab fa-linkedin"></i>
                  </a>
                  <a href="https://x.com/Bare14876127?s=09" target="_blank" class="social-icon">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a href="https://www.instagram.com/archit_agarwal1511?igsh=MXNkcG9iM2k0bmZuaw==" target="_blank" class="social-icon">
                    <i class="fab fa-instagram"></i>
                  </a>
          </div>
              </div>
              <div class="appinfo-container">
                  <p class="appname">Archit Agrawal</p>
                  <p class="appdesignation">Chief Marketing Officer (CMO)</p>
              </div>
          </div>
          <div class="appteam-member">
              <div class="appimage-container">
                  <img src="/anirudh.jpg" alt="Team Member Image" />
                  <div class="social-media-container">
                  <a href="https://www.linkedin.com/in/anirudh-saxena-481ba2245?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" class="social-icon">
                    <i class="fab fa-linkedin"></i>
                  </a>
                  <a href="" target="_blank" class="social-icon">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a href="" target="_blank" class="social-icon">
                    <i class="fab fa-instagram"></i>
                  </a>
          </div>
              </div>
              <div class="appinfo-container">
                  <p class="appname">Anirudh Saxena</p>
                  <p class="appdesignation">Chief Technology Officer (CTO)</p>
              </div>
          </div>
          </div>
        </div>

       {/* Map Section */}
<div className="map-section">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14009.091847020048!2d77.2090219242628!3d28.613939844524303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2c50c2f2c59%3A0x116a9a0dd23cd4e0!2sNew%20Delhi%2C%20Delhi%2C%20India!5e0!3m2!1sen!2sin!4v1603104563980!5m2!1sen!2sin"
    width="100%"
    height="400"
    style={{
      border: "0",
      filter: "invert(90%)",
      borderRadius: "10px",
    }}
    allowFullScreen=""
    loading="lazy"
    title="Google Map - New Delhi"
  ></iframe>
</div>



      {/* Newsletter Section */}
      <section className="appnewsletter">
  <div class="appcontent">
    <div class="apptext">
      <strong>Subscribe Our Newsletter</strong>
      <p>
        Lorem ipsum dolor sit amet consectetur. Feugiat ut aliquet sit pellentesque sollicitudin. 
        Egestas faucibus lacus diam in senectus consectetur. Mattis elit adipiscing quisque tellus scelerisque vehicula ante nunc.
      </p>
      <form>
        <input type="email" placeholder="Enter your email" required />
        <button type="submit">Get a Quote</button>
      </form>
    </div>
    <div class="appimage">
      <img src="/3d-rendering-isometric-fdgdf 1.png" alt="Newsletter Image" />
    </div>
  </div>
</section>

      {/*Footer*/}
      <footer className="footerapp">
  <div className="footerapp-section">
    <div className="logon">
      <div className="oval-bg">
        <img
          src="/AarvasaL.png"
          alt="Aarvasa Logo 1"
          className="logon-image"
        />
      </div>
    </div>
    <p>Building Dreams , Securing Futures</p>
    <div className="appsocial-icons">
      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-linkedin"></i>
      </a>
      <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-twitter"></i>
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-facebook"></i>
      </a>
    </div>
  </div>
  <div className="footerapp-section">
    <h3 className="underlinedapp">Quick Links</h3>
    <ul>
      <li>Home</li>
      <li>About Us</li>
      <li>Services</li>
      <li>Our Team</li>
    </ul>
  </div>
  <div className="footerapp-section">
    <h3 className="underlinedapp">Privacy & Terms</h3>
    <ul>
      <li>Terms and Conditions</li>
      <li>Privacy Policy</li>
      <li>Refund and Cancellation Policy</li>
      <li>Security</li>
    </ul>
  </div>
  <div className="footerapp-section">
    <h3 className="underlinedapp">Contact Us</h3>
    <p>Technology Tower, VIT Vellore</p>
    <p>Room No. 004, Ground Floor</p>
    <p>Vellore, Tamil Nadu, 632014</p>
    <p>Email: theaarvasa@gmail.com</p>
  </div>

</footer>


      </div>

      </div>
    )
  }





return (
      <div className="container">
      {/*Hero*/}
      <main className="hero">
  <div className="hero-content">
    <h3>Welcome to Aarvasa</h3>
    <h1>Manage Your Property</h1>
    <p>
      Your will have everything nearby supermarkets, buses, stations, and
      more—all nearby!
    </p>
    <SearchBar />
  </div>
  <div className="hero-image">
    <img src="/Final ii 1.png" alt="Hero Image" />
  </div>

  {/* SVG Clouds */}
  <svg
    className="cloud"
    width="200"
    height="300"
    viewBox="0 0 64 32"
    style={{ top: "20px", left: "10%" }}
  >
    <ellipse cx="16" cy="16" rx="16" ry="8" />
    <ellipse cx="32" cy="16" rx="16" ry="8" />
    <ellipse cx="24" cy="12" rx="20" ry="10" />
  </svg>
  
  <svg
    className="cloud"
    width="180"
    height="90"
    viewBox="0 0 64 32"
    style={{ top: "10%", left: "40%" }}
  >
    <ellipse cx="16" cy="16" rx="16" ry="8" />
    <ellipse cx="32" cy="16" rx="16" ry="8" />
    <ellipse cx="24" cy="12" rx="20" ry="10" />
  </svg>
  <svg
    className="cloud"
    width="130"
    height="70"
    viewBox="0 0 64 32"
    style={{ bottom: "20px", left: "15%" }}
  >
    <ellipse cx="16" cy="16" rx="16" ry="8" />
    <ellipse cx="32" cy="16" rx="16" ry="8" />
    <ellipse cx="24" cy="12" rx="20" ry="10" />
  </svg>
  
  <svg
    className="cloud"
    width="400"
    height="300"
    viewBox="0 0 64 32"
    style={{ top: "70px", right: "40%" }}
  >
    <ellipse cx="16" cy="16" rx="16" ry="8" />
    <ellipse cx="32" cy="16" rx="16" ry="8" />
    <ellipse cx="24" cy="12" rx="20" ry="10" />
  </svg>
  <svg
    className="cloud"
    width="160"
    height="80"
    viewBox="0 0 64 32"
    style={{ top: "200px", left: "5%" }}
  >
    <ellipse cx="16" cy="16" rx="16" ry="8" />
    <ellipse cx="32" cy="16" rx="16" ry="8" />
    <ellipse cx="24" cy="12" rx="20" ry="10" />
  </svg>
</main>


{/* USP Section */}
<section className="usp">
  <h2>We’ve got properties for everyone</h2>
  <div className="usp-stats">
    <div className="stat-item">
      <img src="/image.png" alt="Owner Properties" />
      <h3>1022</h3>
      <h3>Owner Properties</h3>
      <h3 className="explore-link"><a href="/owner-properties">Explore →</a></h3>
    </div>
    <div className="stat-item">
      <img src="/image(3).png" alt="Projects" />
      <h3>182</h3>
      <h3>Projects</h3>
      <h3 className="explore-link"><a href="/projects">Explore →</a></h3>
    </div>
    <div className="stat-item">
      <img src="/image(2).png" alt="Ready to Move-In" />
      <h3>2364</h3>
      <h3>Ready to move-in</h3>
      <h3 className="explore-link"><a href="/ready-to-move-in">Explore →</a></h3>
    </div>
    <div className="stat-item">
      <img src="/image(1).png" alt="Budget Homes" />
      <h3>3222</h3>
      <h3>Budget Homes</h3>
      <h3 className="explore-link"><a href="/budget-homes">Explore →</a></h3>
    </div>
  </div>
</section>

{/**/}
<Infocard />

{/* Preferred Agents */}
<section className="agents">
  <h2>Aarvasa Preferred Agents in New Delhi</h2>
  <div className="agent-list">
    {/* Agent Card */}
    <div className="agent-cardp">
      {/* First Row */}
      <div className="card-row first-row">
        <img src="/image4.png" alt="Agent" className="agent-photo" />
        <div className="agent-headerapp">
          <h3>Av Preferred</h3>
          <h4>Vivek Kumar Mishra</h4>
        </div>
        <img src="/logo.png" alt="Badge" className="badge-logo" />
      </div>
      {/* Second Row */}
      <div className="card-row second-row">
        <div className="propertyapp-info">
          <img src="/image5.png" alt="MV Properties" className="propertyapp-logo" />
          <div className="propertyapp-details">
            <p>MV Properties</p>
            <p>Operating Since</p> 
            <p>2006</p>
          </div>
        </div>
        <div className="divider"></div>
        <div className="buyers-info">
          <p>Buyers Served</p>
          <p>2500+</p>
        </div>
      </div>
      {/* Third Row */}
      <div className="card-row third-row">
        <h3>45</h3>
        <span>Properties for Sale</span>
        <h3>3</h3>
        <span>Properties for Rent</span>
      </div>
    </div>
    <div className="agent-cardp">
      {/* First Row */}
      <div className="card-row first-row">
        <img src="/image4.png" alt="Agent" className="agent-photo" />
        <div className="agent-headerapp">
          <h3>Av Preferred</h3>
          <h4>Vivek Kumar Mishra</h4>
        </div>
        <img src="/logo.png" alt="Badge" className="badge-logo" />
      </div>
      {/* Second Row */}
      <div className="card-row second-row">
        <div className="propertyapp-info">
          <img src="/image5.png" alt="MV Properties" className="propertyapp-logo" />
          <div className="propertyapp-details">
            <p>MV Properties</p>
            <p>Operating Since 2006</p>
          </div>
        </div>
        <div className="divider"></div>
        <div className="buyers-info">
          <p>Buyers Served</p>
          <p>2500+</p>
        </div>
      </div>
      {/* Third Row */}
      <div className="card-row third-row">
        <h3>45</h3>
        <span>Properties for Sale</span>
        <h3>3</h3>
        <span>Properties for Rent</span>
      </div>
    </div>
    <div className="agent-cardp">
      {/* First Row */}
      <div className="card-row first-row">
        <img src="/image4.png" alt="Agent" className="agent-photo" />
        <div className="agent-headerapp">
          <h3>Av Preferred</h3>
          <h4>Vivek Kumar Mishra</h4>
        </div>
        <img src="/logo.png" alt="Badge" className="badge-logo" />
      </div>
      {/* Second Row */}
      <div className="card-row second-row">
        <div className="propertyapp-info">
          <img src="/image5.png" alt="MV Properties" className="propertyapp-logo" />
          <div className="propertyapp-details">
            <p>MV Properties</p>
            <p>Operating Since 2006</p>
          </div>
        </div>
        <div className="divider"></div>
        <div className="buyers-info">
          <p>Buyers Served</p>
          <p>2500+</p>
        </div>
      </div>
      {/* Third Row */}
      <div className="card-row third-row">
        <h3>45</h3>
        <span>Properties for Sale</span>
        <h3>3</h3>
        <span>Properties for Rent</span>
      </div>
    </div>
    <div className="agent-cardp">
      {/* First Row */}
      <div className="card-row first-row">
        <img src="/image4.png" alt="Agent" className="agent-photo" />
        <div className="agent-headerapp">
          <h3>Av Preferred</h3>
          <h4>Vivek Kumar Mishra</h4>
        </div>
        <img src="/logo.png" alt="Badge" className="badge-logo" />
      </div>
      {/* Second Row */}
      <div className="card-row second-row">
        <div className="propertyapp-info">
          <img src="/image5.png" alt="MV Properties" className="propertyapp-logo" />
          <div className="propertyapp-details">
            <p>MV Properties</p>
            <p>Operating Since 2006</p>
          </div>
        </div>
        <div className="divider"></div>
        <div className="buyers-info">
          <p>Buyers Served</p>
          <p>2500+</p>
        </div>
      </div>
      {/* Third Row */}
      <div className="card-row third-row">
        <h3>45</h3>
        <span>Properties for Sale</span>
        <h3>3</h3>
        <span>Properties for Rent</span>
      </div>
    </div>
  </div>
</section>


      

      {/*Bachelor's*/}
      <section className="Bachelor">
        <div className="absolute top-0 left-1/4 w-32 h-32 rounded-full bg-white opacity-10 blur-xl"></div>
        <div className="absolute top-10 left-1/2 w-24 h-24 rounded-full bg-white opacity-10 blur-xl"></div>
        <div className="absolute -top-10 right-1/4 w-40 h-40 rounded-full bg-white opacity-10 blur-xl"></div>

        <div className="bac-box">
          
          <p>Solving the</p>
          <div className="secnd-line">Unsolvable problem</div>
          <p className="third-line">with <span className="highlight">Aarvasa</span></p>
          <p className="bold">Now Property Available for <strong>BACHELOR'S</strong> 
          <div className="itali">also...</div>
          </p>

          <a href="/services" className="explore-link">Explore →</a>
        </div>
      </section>

      {/* Tools and Advice */}
      <ToolsAdvice />

      {/* Real Estate Guide Section */}
      <Realestate />

      <div class="post-propertyapp-container">
    <div class="left-side">
        <h3>Post your property for <div className="itali">Free...</div></h3>
        <p>List it on Aarvasa and get Genuine leads</p>
    </div>
    <div class="right-side">
        <button class="post-propertyapp-btn" onClick={()=>{
          n('/sell');
        }}>
            Post Property
            <span class="free-btn">Free</span>
        </button>
    </div>
</div>

      {/* Our Team */}
      <div class="appour-team">
      <h2>Our Team</h2>
      <div class="appteam-members">
          <div class="appteam-member">
              <div class="appimage-container">
                  <img src="/uday.jpg" alt="Team Member Image" />
                  <div class="social-media-container">
                  <a href="https://www.linkedin.com/in/udayprakashsahu/" target="_blank" class="social-icon">
                    <i class="fab fa-linkedin"></i>
                  </a>
                  <a href="http://x.com/udaysahu_" target="_blank" class="social-icon">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a href="http://instagram.com/uday.sahu_10" target="_blank" class="social-icon">
                    <i class="fab fa-instagram"></i>
                  </a>
          </div>
              </div>
              <div class="appinfo-container">
                  <p class="appname">Uday Prakash Sahu</p>
                  <p class="appdesignation">Founder & CEO</p>
              </div>
          </div>
          <div class="appteam-member">
              <div class="appimage-container">
                  <img src="/ansh2.jpg" alt="Team Member Image" />
                  <div class="social-media-container">
                  <a href="https://www.linkedin.com/in/ansh-dubey-526325273/" target="_blank" class="social-icon">
                    <i class="fab fa-linkedin"></i>
                  </a>
                  <a href="https://x.com/anshaarush?s=21" target="_blank" class="social-icon">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a href="https://www.instagram.com/ansh.dubey/?igsh=MTR0ZGxxaHRkcHZsZw%3D%3D&utm_source=qr" target="_blank" class="social-icon">
                    <i class="fab fa-instagram"></i>
                  </a>
          </div>
              </div>
              <div class="appinfo-container">
                  <p class="appname">Ansh Dubey</p>
                  <p class="appdesignation">Co-Founder & COO</p>
              </div>
          </div>
          <div class="appteam-member">
              <div class="appimage-container">
                  <img src="/lakshay.png" alt="Team Member Image" />
                  <div class="social-media-container">
                  <a href="https://www.linkedin.com/in/lakshya-phoolwani-44b807277?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" class="social-icon">
                    <i class="fab fa-linkedin"></i>
                  </a>
                  <a href="" target="_blank" class="social-icon">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a href="https://www.instagram.com/lakshya._.47?igsh=ZDYybjRsM2VtaXJ1" target="_blank" class="social-icon">
                    <i class="fab fa-instagram"></i>
                  </a>
          </div>
              </div>
              <div class="appinfo-container">
                  <p class="appname">Lakshya Phoolwani</p>
                  <p class="appdesignation">Chief Financial Officer (CFO)</p>
              </div>
          </div>
          <div class="appteam-member">
              <div class="appimage-container">
                  <img src="/archit.jpg" alt="Team Member Image" />
                  <div class="social-media-container">
                  <a href="https://www.linkedin.com/in/archit-agarwal03/" target="_blank" class="social-icon">
                    <i class="fab fa-linkedin"></i>
                  </a>
                  <a href="https://x.com/Bare14876127?s=09" target="_blank" class="social-icon">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a href="https://www.instagram.com/archit_agarwal1511?igsh=MXNkcG9iM2k0bmZuaw==" target="_blank" class="social-icon">
                    <i class="fab fa-instagram"></i>
                  </a>
          </div>
              </div>
              <div class="appinfo-container">
                  <p class="appname">Archit Agrawal</p>
                  <p class="appdesignation">Chief Marketing Officer (CMO)</p>
              </div>
          </div>
          <div class="appteam-member">
              <div class="appimage-container">
                  <img src="/anirudh.jpg" alt="Team Member Image" />
                  <div class="social-media-container">
                  <a href="https://www.linkedin.com/in/anirudh-saxena-481ba2245?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" class="social-icon">
                    <i class="fab fa-linkedin"></i>
                  </a>
                  <a href="" target="_blank" class="social-icon">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a href="" target="_blank" class="social-icon">
                    <i class="fab fa-instagram"></i>
                  </a>
          </div>
              </div>
              <div class="appinfo-container">
                  <p class="appname">Anirudh Saxena</p>
                  <p class="appdesignation">Chief Technology Officer (CTO)</p>
              </div>
          </div>
          </div>
        </div>

       {/* Map Section */}
<div className="map-section">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14009.091847020048!2d77.2090219242628!3d28.613939844524303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2c50c2f2c59%3A0x116a9a0dd23cd4e0!2sNew%20Delhi%2C%20Delhi%2C%20India!5e0!3m2!1sen!2sin!4v1603104563980!5m2!1sen!2sin"
    width="100%"
    height="400"
    style={{
      border: "0",
      filter: "invert(90%)",
      borderRadius: "10px",
    }}
    allowFullScreen=""
    loading="lazy"
    title="Google Map - New Delhi"
  ></iframe>
</div>



      {/* Newsletter Section */}
      <section className="appnewsletter">
  <div class="appcontent">
    <div class="apptext">
      <strong>Subscribe Our Newsletter</strong>
      <p>
        Lorem ipsum dolor sit amet consectetur. Feugiat ut aliquet sit pellentesque sollicitudin. 
        Egestas faucibus lacus diam in senectus consectetur. Mattis elit adipiscing quisque tellus scelerisque vehicula ante nunc.
      </p>
      <form>
        <input type="email" placeholder="Enter your email" required />
        <button type="submit">Get a Quote</button>
      </form>
    </div>
    <div class="appimage">
      <img src="/3d-rendering-isometric-fdgdf 1.png" alt="Newsletter Image" />
    </div>
  </div>
</section>

      {/*Footer*/}
      <footer className="footerapp">
  <div className="footerapp-section">
    <div className="logon">
      <div className="oval-bg">
        <img
          src="/AarvasaL.png"
          alt="Aarvasa Logo 1"
          className="logon-image"
        />
      </div>
    </div>
    <p>Building Dreams , Securing Futures</p>
    <div className="appsocial-icons">
      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-linkedin"></i>
      </a>
      <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-twitter"></i>
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-facebook"></i>
      </a>
    </div>
  </div>
  <div className="footerapp-section">
    <h3 className="underlinedapp">Quick Links</h3>
    <ul>
      <li>Home</li>
      <li>About Us</li>
      <li>Services</li>
      <li>Our Team</li>
    </ul>
  </div>
  <div className="footerapp-section">
    <h3 className="underlinedapp">Privacy & Terms</h3>
    <ul>
      <li>Terms and Conditions</li>
      <li>Privacy Policy</li>
      <li>Refund and Cancellation Policy</li>
      <li>Security</li>
    </ul>
  </div>
  <div className="footerapp-section">
    <h3 className="underlinedapp">Contact Us</h3>
    <p>Technology Tower, VIT Vellore</p>
    <p>Room No. 004, Ground Floor</p>
    <p>Vellore, Tamil Nadu, 632014</p>
    <p>Email: theaarvasa@gmail.com</p>
  </div>

</footer>


      </div>
  );
}

export default App;
