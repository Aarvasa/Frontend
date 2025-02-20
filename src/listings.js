import React from "react";
import "./listings.css";

const Listing = () => {

  const properties = [
    { 
      id:1,
      name: "Risland Sky Mansion",
      location: "Chattarpur, New Delhi",
      price: "₹6.29 Cr - ₹7.79 Cr",
      type: "3 BHK | Ready to Move",
      certificatesLink: "#",
      amenitiesLink: "#",
      contactBuilder: "#",
      downloadBrochure: "#",
    },
      {id:2,
      name: "Risland Sky Mansion",
      location: "Chattarpur, New Delhi",
      price: "₹6.29 Cr - ₹7.79 Cr",
      type: "3 BHK | Ready to Move",
      certificatesLink: "#",
      amenitiesLink: "#",
      contactBuilder: "#",
      downloadBrochure: "#",
      },
      {id:3,
        name: "Risland Sky Mansion",
        location: "Chattarpur, New Delhi",
        price: "₹6.29 Cr - ₹7.79 Cr",
        type: "3 BHK | Ready to Move",
        certificatesLink: "#",
        amenitiesLink: "#",
        contactBuilder: "#",
        downloadBrochure: "#",
        },
        {id:4,
          name: "Risland Sky Mansion",
          location: "Chattarpur, New Delhi",
          price: "₹6.29 Cr - ₹7.79 Cr",
          type: "3 BHK | Ready to Move",
          certificatesLink: "#",
          amenitiesLink: "#",
          contactBuilder: "#",
          downloadBrochure: "#",
          },
          {id:5,
            name: "Risland Sky Mansion",
            location: "Chattarpur, New Delhi",
            price: "₹6.29 Cr - ₹7.79 Cr",
            type: "3 BHK | Ready to Move",
            certificatesLink: "#",
            amenitiesLink: "#",
            contactBuilder: "#",
            downloadBrochure: "#",
            }
    // Repeat or fetch properties dynamically
  ];
  const projects = [
      { 
        id:1,
        name: "Munish Homes",
        price: "₹22 Lac - ₹60 Lac",
        location: "Dwarka Mor",
        contactLink: "#",
      },
      { 
        id:2,
        name: "Munish Homes",
        price: "₹22 Lac - ₹60 Lac",
        location: "Dwarka Mor",
        contactLink: "#",
      },
      // Add more projects as needed
    ];
  return (
    <div className="property-listing-container">
      <h2>Top Projects in New Delhi</h2>
      <div className="filters">
        <button>Budget</button>
        <button>BHK</button>
        <button>Possession</button>
        <button>Ready to move in</button>
      </div>
      {properties.map((property, index) => (
        <div key={index} className="property-card">
          <img
            src="/mansion.jpeg" // Replace with actual image URLs
            alt={property.name}
            className="property-image"
          />
          <div className="property-details">
            <h3>{property.name}</h3>
            <p>{property.location}</p>
            <p>{property.price}</p>
            <p>{property.type}</p>
          </div>
          <div className="middle-card">
           <div className="expert">
            <h2>EXPERT REVIEWS & ADVICE</h2>
            </div>
           <div className="property-actions">
            <div className="RERA">
              <h3>RERA Reports</h3>
              <p>Project certificates and legal approval</p>
            <a href={property.certificatesLink} className="certificates-link">
              View Certificates 
            </a>
            </div>
            <div className="amenti">
            <h3>Amenities</h3>
            <p>All 19 amenities in a project</p>
            <a href={property.amenitiesLink} className="amenities-link">
              View Amenities
            </a>
           </div>
           </div>
          </div>
          <div className="cta-buttons">
            <a href={property.contactBuilder} className="contact-builder">
              Contact Builder
            </a>
            <a href={property.downloadBrochure} className="download-brochure">
              Download Brochure
            </a>
          </div>
        </div>
      ))}
      <div className="projects-container">
      <h2>Explore Projects in New Delhi</h2>
      <div className="icons-row">
     <div className="icol"><div className="icon1"><span role="img" aria-label="Speaker">💸</span></div></div>
        <div className="icon"><span role="img" aria-label="buildings">🏢</span></div>
        <div className="icon"><span role="img" aria-label="star">⭐</span></div>
      </div>
      <div className="projects-row">
        {projects.map((project, index) => (
          <div key={index} className="projectl-card">
            <div className="projectl-image">
              {/* Replace with actual image source */}
              <img src="/img.jpeg" alt={project.name} />
            </div>
            <div className="projectl-details">
              <h3>{project.name}</h3>
              <p>{project.price}</p>
              <p>{project.location}</p>
              <a href={project.contactLink} className="contact-link">
                Contact Seller →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
    {properties.map((property, index) => (
        <div key={index} className="property-card">
          <img
            src="/mansion.jpeg" // Replace with actual image URLs
            alt={property.name}
            className="property-image"
          />
          <div className="property-details">
            <h3>{property.name}</h3>
            <p>{property.location}</p>
            <p>{property.price}</p>
            <p>{property.type}</p>
          </div>
          <div className="middle-card">
           <div className="expert">
            <h2>EXPERT REVIEWS & ADVICE</h2>
            </div>
           <div className="property-actions">
            <div className="RERA">
              <h3>RERA Reports</h3>
              <p>Project certificates and legal approval</p>
            <a href={property.certificatesLink} className="certificates-link">
              View Certificates 
            </a>
            </div>
            <div className="amenti">
            <h3>Amenities</h3>
            <p>All 19 amenities in a project</p>
            <a href={property.amenitiesLink} className="amenities-link">
              View Amenities
            </a>
           </div>
           </div>
          </div>
          <div className="cta-buttons">
            <a href={property.contactBuilder} className="contact-builder">
              Contact Builder
            </a>
            <a href={property.downloadBrochure} className="download-brochure">
              Download Brochure
            </a>
          </div>
        </div>
      ))}
      {properties.map((property, index) => (
        <div key={index} className="property-card">
          <img
            src="/mansion.jpeg" // Replace with actual image URLs
            alt={property.name}
            className="property-image"
          />
          <div className="property-details">
            <h3>{property.name}</h3>
            <p>{property.location}</p>
            <p>{property.price}</p>
            <p>{property.type}</p>
          </div>
          <div className="middle-card">
           <div className="expert">
            <h2>EXPERT REVIEWS & ADVICE</h2>
            </div>
           <div className="property-actions">
            <div className="RERA">
              <h3>RERA Reports</h3>
              <p>Project certificates and legal approval</p>
            <a href={property.certificatesLink} className="certificates-link">
              View Certificates 
            </a>
            </div>
            <div className="amenti">
            <h3>Amenities</h3>
            <p>All 19 amenities in a project</p>
            <a href={property.amenitiesLink} className="amenities-link">
              View Amenities
            </a>
           </div>
           </div>
          </div>
          <div className="cta-buttons">
            <a href={property.contactBuilder} className="contact-builder">
              Contact Builder
            </a>
            <a href={property.downloadBrochure} className="download-brochure">
              Download Brochure
            </a>
          </div>
        </div>
      ))}
  
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
};

export default Listing;