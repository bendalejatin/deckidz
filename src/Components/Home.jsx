import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import "./Styles/Home.css";

import home_bg1 from "./Images/slider1.avif";
import home_bg2 from "./Images/slider2.avif";
import home_bg3 from "./Images/slider3.avif";

import playstoreimg from "./Images/Google_Playimg.avif";
import appstoreimg from "./Images/App_Logo_PlayStore.avif";

import bear from "./Images/bear_tree.png";
import arpuzzlecover from "./Images/arpuzzle_cover.jpg";

import elephant from "./Images/elephant.png";
import cat from "./Images/cat.png";
import lion from "./Images/lion.png";

import elephantvid from "./Videos/elephant.mp4";
import monkeyvid from "./Videos/monkey.mp4";

import elephantv from "./Images/elephantvid.png";
import monkeyv from "./Images/monkeyvid.png";

import {
  FaGooglePlay
} from "react-icons/fa";

const images = [home_bg1, home_bg2, home_bg3];

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const [showVideo, setShowVideo] = useState(false);

  const handlePlayVideo = () => {
    setShowVideo(true);
  };

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
          <a
            href="https://play.google.com/store/apps/details?id=com.DECKidz.AnimalEncyclopediaWithAR"
            className="download-btn"
          >
            <img src={playstoreimg} alt="Google Play Logo" />
            <div>
              <span>GET IT FOR</span>
              <h3>Android</h3>
            </div>
          </a>
        </div>
      </div>

      <div className="product-tour">
        <div className="banner">
          <h1>Product Tour</h1>
        </div>

        <div className="section">
          <div className="ar-image">
            <img src={bear} alt="Bear under tree" />
          </div>
          <h2 className="ar-title">AR Animal Games Function</h2>
        </div>

        <div className="ar-content">
          <div className="ar-video-container">
            {/* <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/RIT0GjT8q8Q?si=oL5H5Dea_jvfVEcX"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe> */}
            <div className="video-wrapper">
              {!showVideo ? (
                <div className="cover" onClick={handlePlayVideo}>
                  <img
                    src={arpuzzlecover}
                    alt="Video Thumbnail"
                    className="video-thumbnail"
                  />
                  <div className="play-button">▶</div>
                </div>
              ) : (
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/RIT0GjT8q8Q?autoplay=1"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              )}
            </div>
          </div>
        </div>
        <div className="details-button">
          <button>Details</button>
        </div>
      </div>

      <hr></hr>

      <div className="elephant">
        <img src={elephant} alt="Elephant" />
      </div>

      <div className="ar-container">
        <div className="ar-text">
          <ul>
            <li>
              <strong>Augmented Reality</strong> has proven to be an effective
              means of educating and entertaining young people of all ages and
              grade levels, from toddlers to graduate students.
            </li>
            <li>
              AR Puzzle Cards can be used to teach the Animal Name by digitally
              displaying an animal whose name & animal match on the Puzzle.
            </li>
          </ul>
        </div>
        <div className="ar-video-frame1">
          <div className="ar-video-wrapper">
            {/* <iframe
              className="ar-video"
              src=""
              title="AR Video"
              allowFullScreen
            ></iframe> */}
            <div className="video-wrapper">
              {!showVideo ? (
                <div className="cover" onClick={handlePlayVideo}>
                  <img
                    src={elephantv}
                    alt="Video Thumbnail"
                    className="video-thumbnail"
                  />
                  <div className="play-button">▶</div>
                </div>
              ) : (
                <iframe
                  width="560"
                  height="315"
                  src={elephantvid}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              )}
            </div>
            <p className="website-link">www.deckidz.com</p>
          </div>
        </div>
      </div>

      <div className="cat">
        <img src={cat} alt="Cat" />
      </div>

      <div className="ar-container">
        <div className="ar-video-frame2">
          {/* <iframe
            className="ar-video"
            src=""
            title="AR Video"
            allowFullScreen
          ></iframe> */}
          <div className="video-wrapper">
              {!showVideo ? (
                <div className="cover" onClick={handlePlayVideo}>
                  <img
                    src={monkeyv}
                    alt="Video Thumbnail"
                    className="video-thumbnail"
                  />
                  <div className="play-button">▶</div>
                </div>
              ) : (
                <iframe
                  width="560"
                  height="315"
                  src={monkeyvid}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              )}
            </div>
          <p className="website-link">www.deckidz.com</p>
        </div>
        <div className="ar-text">
          <ul>
            <li>
              <strong>Today's educators</strong> understand that interaction and
              creativity enhance the learning process, and Augmented Reality
              provides both.
            </li>
            <li>
              AR can transform the classroom into an environment where
              characters can spring to life from the pages of a textbook.
            </li>
          </ul>
        </div>
      </div>

      <hr></hr>

      <div className="gifts-container">
        {/* Heading */}
        <h2 className="gifts-heading">
          Our Educational Animal Games Kit can be used as:-
        </h2>

        {/* Cards Section */}
        <div className="gifts-grid">
          <div className="gift-card yellow">
            <h3>Educational Gifts</h3>
            <p>
              Our product is AR-based which is very helpful for the kids to
              getting real experience of the Object, it creates curiosity, Fun &
              Learning at the same time.
            </p>
          </div>

          <div className="gift-card red">
            <h3>Unique Birthday Gift</h3>
            <p>
              A very unique birthday gift for kids as all the Puzzle Cards are
              educational, helping develop retention power and general
              awareness.
            </p>
          </div>

          <div className="gift-card blue">
            <h3>Innovative Gifts For Kids</h3>
            <p>
              Augmented reality is very informative and enhances a child's
              visualization skills, encouraging them to think outside the box.
            </p>
          </div>

          <div className="gift-card green">
            <h3>Best Gift For Children</h3>
            <p>
              These Puzzle Cards help develop motor skills, problem-solving,
              creativity, and thinking abilities—great for kids 3+ years old.
            </p>
          </div>
        </div>
        <div className="spacer" >
        </div>
        <div className="lion-container">
          <div className="lion">
            <img src={lion} alt="Make In India" />
            {/* <span className="text-overlay">Make In India</span> */}
          </div>
          <h2 className="footer-text">
            All Products Available for White Labeling
          </h2>
        </div>
      </div>

      <section className="app-download">
      <h2 className="heading">Get the App...</h2>
      <p className="description">
        Available on platform for easy access!
      </p>

      <div className="buttons">

        <a
          href="https://play.google.com/store/apps/details?id=com.DECKidz.AnimalEncyclopediaWithAR"
          target="_blank"
          rel="noopener noreferrer"
          className="download-button google-play"
        >
          <FaGooglePlay/>
          <span>Google Play</span>
        </a>
      </div>
    </section>

    </div>
  );
};

export default Home;
