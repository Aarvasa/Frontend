import './agents.css';
import "./loader.css";
import { useState } from 'react';
import { useEffect } from 'react';
const localities = [
  { name: 'Dwarka', priceRange: '₹13k - 72k/mo.', searches: '7%', link: '#' },
  { name: 'Saket', priceRange: '₹14k - 91k/mo.', searches: '4%', link: '#' },
  { name: 'Vasant Kunj', priceRange: '₹23k - 1.1L/mo.', searches: '3%', link: '#' },
];
const Agents = () => {

  let [load,set_load] = useState(1);

  let [agents,set_agents] = useState([]);
  useEffect(()=>{
    async function t(){

      let op = await fetch('http://localhost:8000/agents/all',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            
        }
    );

    let rgd = await op.json();

    set_agents([...rgd.agents]);
    set_load(0);





    }
    t();


  },[]);

  if(load == 1){

    return (
      <div>
          <div className="loader-container">
              <div className="loader"></div>
          </div>
      </div>
  );

  }
  return (
    <div className="containera">

    <div className="agents-page">
    <div classname = "agents-heading"><h2>Agents in New Delhi who can help you</h2></div>
    <div className="agents-list">
      {[...agents].map((agent,index) => (
        <div className="agent-card" key={index}>
          <div className="agent-header">
            <img src="image 102.png" alt="Sahyog Logo" className="agent-logo" />
            <h3>{agent.name}</h3>
          </div>
          <div className="agent-details">
            <p><strong>Deals In:</strong> {agent.deals_in}</p>
            <p><strong>Experience:</strong> {agent.experience}</p>
            <p><strong>Phone:</strong> {agent.contact_no}</p>
            <p><strong>Aarvasa email id:</strong> {agent.aarvasa_id}</p>
            <p><strong>Personal email id:</strong> {agent.email_id}</p>
            <p><img src='image 105.png' alt="Sahyog Logo" className="certificate"  /></p>
          </div>
          <div className="agent-actions">
            <button className="contact-button">Contact Now</button>
            
          </div>
        </div>
      ))}
    </div>
  </div>
  <div className="agents-page2">
    <div className="agents-list">
    {[...agents].map((agent,index) => (
        <div className="agent-card" key={index}>
          <div className="agent-header">
            <img src="image 102.png" alt="Sahyog Logo" className="agent-logo" />
            <h3>{agent.name}</h3>
          </div>
          <div className="agent-details">
            <p><strong>Deals In:</strong> {agent.deals_in}</p>
            <p><strong>Experience:</strong> {agent.experience}</p>
            <p><strong>Phone:</strong> {agent.contact_no}</p>
            <p><strong>Aarvasa email id:</strong> {agent.aarvasa_id}</p>
            <p><strong>Personal email id:</strong> {agent.email_id}</p>
            <p><img src='image 105.png' alt="Sahyog Logo" className="certificate"  /></p>
          </div>
          <div className="agent-actions">
            <button className="contact-button">Contact Now</button>
            
          </div>
        </div>
      ))}
    </div>
  </div>
  <div className="localities-section">
      <div className="header">
        <h2>Explore Delhi</h2>
        <button className="view-overview-btn">View Delhi Overview</button>
      </div>
      <div className="localities-container">
        <div className="localities-card">
          <h3>Popular Localities</h3>
          <p>Most searched by tenants in Delhi</p>
          <ul>
            {localities.map((locality, index) => (
              <li key={index} className="locality-item">
                <div className="locality-info">
                  <span className="locality-name">{locality.name}</span>
                  <span className="price-range">@ {locality.priceRange}</span>
                </div>
                <div className="locality-stats">
                  <span className="searches">{locality.searches} Searches</span>
                  <a href={locality.link} className="view-projects-link">
                    View Projects →
                  </a>
                </div>
              </li>
            ))}
          </ul>
          <a href="#" className="view-all-localities">
            View 1151 localities
          </a>
        </div>
        <div className="localities-card2">
          <h3>Popular Localities</h3>
          <p>Most searched by tenants in Delhi</p>
          <ul>
            {localities.map((locality, index) => (
              <li key={index} className="locality-item">
                <div className="locality-info">
                  <span className="locality-name">{locality.name}</span>
                  <span className="price-range">@ {locality.priceRange}</span>
                </div>
                <div className="locality-stats">
                  <span className="searches">{locality.searches} Searches</span>
                  <a href={locality.link} className="view-projects-link">
                    View Projects →
                  </a>
                </div>
              </li>
            ))}
          </ul>
          <a href="#" className="view-all-localities">
            View 1151 localities
          </a>
        </div>
      </div>
    </div>
  <div className="agents-page3">
    <div className="agents-list">
    {[...agents].map((agent,index) => (
        <div className="agent-card" key={index}>
          <div className="agent-header">
            <img src="image 102.png" alt="Sahyog Logo" className="agent-logo" />
            <h3>{agent.name}</h3>
          </div>
          <div className="agent-details">
            <p><strong>Deals In:</strong> {agent.deals_in}</p>
            <p><strong>Experience:</strong> {agent.experience}</p>
            <p><strong>Phone:</strong> {agent.contact_no}</p>
            <p><strong>Aarvasa email id:</strong> {agent.aarvasa_id}</p>
            <p><strong>Personal email id:</strong> {agent.email_id}</p>
            <p><img src='image 105.png' alt="Sahyog Logo" className="certificate"  /></p>
          </div>
          <div className="agent-actions">
            <button className="contact-button">Contact Now</button>
            
          </div>
        </div>
      ))}
    </div>
  </div>


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

export default Agents;