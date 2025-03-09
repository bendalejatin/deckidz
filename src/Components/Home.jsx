import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import "./Styles/Home.css";

import home_bg1 from "./Images/slider1.avif";
import home_bg2 from "./Images/slider2.avif";
import home_bg3 from "./Images/slider3.avif";

import playstoreimg from "./Images/Google_Playimg.avif";
import appstoreimg from "./Images/App_Logo_PlayStore.avif";

const images = [home_bg1, home_bg2, home_bg3];

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="home_content">
        <div
          className="slider"
          style={{ transform: `translateX(-${currentImage * 100}%)` }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="slide"
              style={{
                backgroundImage: `url(${image})`,
                backgroundPosition: "center",
              }}
            />
          ))}
        </div>
        <div className="overlay">
          <div className="home_main_content">
            <h1>Welcome to Deckidz..!</h1>
            <p>An interactive learning platform for everyone.</p>
            <Link to="/Products">
              <button className="header-button btn_border">Explore</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="download-container">
        <div className="header">Get The App From Here</div>
        <div className="arrow">↓</div>
        <div className="app-card">
          <div className="app-info">
            <img src={appstoreimg} alt="App Icon" className="app-icon" />
            <div className="app-details">
              <h2>Animal Encyclopedia</h2>
              <h3>With AR</h3>
            </div>
          </div>
          <a href="https://play.google.com/store/apps/details?id=com.DECKidz.AnimalEncyclopediaWithAR" className="download-btn">
            <img src={playstoreimg} alt="Google Play Logo" />
            <div>
              <span>GET IT FOR</span>
              <h3>Android</h3>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
