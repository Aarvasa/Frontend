import React from 'react';
import './aboutus.css';
import ReviewCard from "./reviewcard";
import CompanyPartners from "./CompanyPartners";


const AboutUs = () => {
    const milestones = [
        { month: 'May', description: 'Team Formation and Initial Planning' },
        { month: 'June', description: 'MVP Development Kickoff' },
        { month: 'July', description: 'Strategic Partnerships' },
        { month: 'August', description: 'MVP Testing Phase' },
        { month: 'September', description: 'Beta Launch with Core Features' },
        { month: 'October', description: 'Marketing and User Acquisition' },
    ];

    const partners = [
        { name: "Timeslotter pvt Ltd", logo: "Rectangle 349.png" },
        { name: "PSAssociates", logo: "Rectangle 352.png" },
        { name: "Paramjyoti pvt Ltd", logo: "Rectangle 355.png" },
        { name: "Ealth technologies", logo: "Rectangle 358.png" },
        { name: "Softwave", logo: "Rectangle 358(1).png" },
      ];

    return (
        <div className="about-section">
            <div className="about-contentaboveheader">
            <h2>Who We Are :</h2>
            </div>
            <div class="about-content">
        <img src="_0001.png" alt="Character" class="character-img" />
        <div class="about-text">
            <p>
                <strong>So We Are Aarvasa</strong>, we are more than just real estate professionals — we are your 
                partners in creating a better future. With a passion for helping individuals and families find 
                their dream homes, we combine expertise, integrity, and innovation to deliver exceptional results. 
                Our team consists of seasoned professionals with deep roots in the community and a comprehensive 
                understanding of the real estate market. Whether you're buying your first home, upgrading to a 
                larger space, or investing in properties, we are dedicated to guiding you every step of the way.
            </p>
        </div>
        </div>
            <div className="mission-hea">
                <h2>Connecting People with Perfect Properties and Smart Investments</h2>
            </div>
            
            <div className="mission-vision">
    <div className="left-column">
        <div className="card mission">
            <h3>Our Mission</h3>
            <p>
                "To democratize real estate investments by offering innovative solutions like flexible payment 
                plans, AR/VR property tours, and eco-conscious property insights, while providing a seamless 
                experience for buyers, sellers, and renters to maximize their returns and achieve financial 
                independence."
            </p>
        </div>
        <div className="card vision">
            <h3>Our Vision</h3>
            <p>
                "To revolutionize real estate accessibility by creating a one-stop platform that empowers 
                individuals to invest, lease, and manage properties effortlessly while fostering financial 
                growth and sustainability."
            </p>
        </div>
    </div>
    <div className="right-column">
        <div className="card center-card">
            <p><strong>Aarvasa</strong> Simplifies Real Estate with Seamless Transactions, Investments, and Property Monetization</p>
            <img src="houseas.png" alt="Building" className="center-img" />
            <button>Contact Us</button>
        </div>
    </div>
</div>


            {/* Milestones Section */}
            <div className="milestones-header">
                <h3>Milestones and Future Plans:</h3>
            </div>
            <section className="milestones">
      <div className="timeline">
        {milestones.map((milestone, index) => (
          <React.Fragment key={index}>
            <div className="timeline-item">
              <div className="timeline-star">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M12 .587l3.668 7.425L24 9.748l-6 5.853 1.417 8.257L12 19.771l-7.417 4.087L6 15.601 0 9.748l8.332-1.736z" />
                </svg>
              </div>
              <div className="timeline-month">{milestone.month}</div>
              <div className="timeline-description">{milestone.description}</div>
            </div>
            {index < milestones.length - 1 && (
              <div className="timeline-connector">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>

            {/* Our Team */}
      <div class="our-team">
      <h2>Meet Our Team</h2>
      <div class="team-members">
          <div class="team-member">
              <div class="image-container">
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
              <div class="info-container">
                  <p class="name">Uday Prakash Sahu</p>
                  <p class="designation">Founder & CEO</p>
              </div>
          </div>
          <div class="team-member">
              <div class="image-container">
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
              <div class="info-container">
                  <p class="name">Ansh Dubey</p>
                  <p class="designation">Co-Founder & COO</p>
              </div>
          </div>
          <div class="team-member">
              <div class="image-container">
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
              <div class="info-container">
                  <p class="name">Lakshya Phoolwani</p>
                  <p class="designation">Chief Financial Officer (CFO)</p>
              </div>
          </div>
          <div class="team-member">
              <div class="image-container">
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
              <div class="info-container">
                  <p class="name">Archit Agrawal</p>
                  <p class="designation">Chief Marketing Officer (CMO)</p>
              </div>
          </div>
          <div class="team-member">
              <div class="image-container">
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
              <div class="info-container">
                  <p class="name">Anirudh Saxena</p>
                  <p class="designation">Chief Technology Officer (CTO)</p>
              </div>
          </div>
          </div>
        </div>
            
    <div class="asserWhatclients">
    <h2>What Our Clients Say</h2>
    </div>        
     <div class="serreviewcards">
     <ReviewCard/>
     <ReviewCard/>
     <ReviewCard/>
     </div>

    <div classname ="mapsabove-header">
        <h1>Geographic Reach :</h1>
     </div>
     <div className="aboutusmap-section">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14009.091847020048!2d77.2090219242628!3d28.613939844524303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2c50c2f2c59%3A0x116a9a0dd23cd4e0!2sNew%20Delhi%2C%20Delhi%2C%20India!5e0!3m2!1sen!2sin!4v1603104563980!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{
            border: "none",
            filter: "invert(85%)",
            borderRadius: "15px",
            }}
            allowFullScreen=""
            loading="lazy"
            title="Google Map - New Delhi"
        ></iframe>
        </div>

     <div classname ="division">
      <CompanyPartners partners={partners} />
    </div>

    <div>
        <h3 classname = "formhead-container">Contact Us:</h3>
    </div>
    <div>
    <section className="aboutusserconsultation">
                <div className="aboutussercontent">
                    <div className="aboutusserimage">
                    <img src="/house.png" alt="house" />
                    </div>
                    <div className="aboutusserform-container">
                    <form>
                        <label htmlFor="name">NAME</label>
                        <input type="text" id="name" placeholder="Enter your name" required />
                        
                        <label htmlFor="email">AARVASA EMAIL ID</label>
                        <input type="email" id="email" placeholder="Enter your email" required />
                        
                        <label htmlFor="date">DATE</label>
                        <input type="date" id="date" required />
                        
                        <button type="submit">SEND</button>
                </form>
            </div>
        </div>
    </section>
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
};

export default AboutUs;
