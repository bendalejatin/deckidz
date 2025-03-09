import React from 'react';
import './Styles/AboutUs.css';
import aboutImage from './Images/3_edited.avif'; // Ensure the path is correct
import founderImage from './Images/My Pics-Professional.avif'; // Ensure the path is correct

const AboutUs = () => {
  return (
    
    <div className="about-us">
      <h1>DECKIDZ<sup>®</sup></h1>
      <h2>About Us</h2>
      
      <img src={aboutImage} alt="Kids" className="about-image" />
      
      <p>
      Explore the endless opportunities to learn with products from DECKIDZ..!  
      We offer the best of technology advancements in the fields of AR techniques into a potential medium of educational learning through a digital platform.
      </p>
      
      <p><strong>Our products focus on the below important points:</strong></p>
      <ul>
        <li>
        We initiate with diagnoses and increasing brain performance in key areas such as intelligence, entire growth, practical thinking, logical approach, and creativity.
        </li>
        <li>
        To bridge the gap in intellectual competency, learning, and reasoning.
        </li>
        <li>
        To offer an advancing journey of continual improvement and limitless learning.
        augmented reality (AR) is an essential medium that brings our product to life through a digital platform.
        </li>
      </ul>

      <p>
      Our mission is to nourish every child’s passion, curiosity, optimism, and educational success.
      </p>

      <p>
      We hope every parent and their child enjoy our products as much as we enjoy bringing them in front of you.
      </p>

      <hr className="divider" />

      <div className="founder-profile">
      <h1>
        <span className="plus-sign">+</span>
        Founder Profile
        <span className="plus-sign">+</span>
      </h1>

      <img src={founderImage} alt="Founder" />
      
      <h2>B.E COMPUTER</h2>
      <p>
        Founder of DECKIDZ, DEC E-Learning, Melon Education & DEC Gaming Studio Pvt Ltd.
      </p>

      {/* Education Section */}
      <div className="founder-section">
        <p className="founder-section-title">* Education</p>
        <ul>
          <li>MCSA – (Microsoft Certified System Administration)</li>
          <li>CCNA – (Cisco Certified Network Associate)</li>
          <li>CNF – (Certified Network Security Foundation)</li>
          <li>P.G in Computer Network & Security (Singapore)</li>
        </ul>
      </div>

      {/* Experience Section */}
      <div className="founder-section">
        <p className="founder-section-title">* Experience</p>
        <ul>
          <li>12 years of working experience, including national and international companies.</li>
          <li>External project coordinator, lecturer, and examiner at many colleges.</li>
          <li>More than 15 applications and games launched on the Google Play Store.</li>
        </ul>
      </div>
        
      {/* Get in Touch Section */}
      <div className="founder-section">
        <p className="founder-section-title">* Get In Touch</p>
        <ul>
            <li>
            <a 
          href="https://www.linkedin.com/in/BhavinMakwana24/" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          https://www.linkedin.com/in/BhavinMakwana24/
        </a>
            </li>
        </ul>
      </div>
    </div>

    </div>
    
  );
};

export default AboutUs;
