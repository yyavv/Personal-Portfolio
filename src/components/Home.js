import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactTypingEffect from "react-typing-effect";
import Resume from "../assets/Yavuz_Celik.pdf";

const HomePage = () => {
  const location = useLocation();

  return (
    <div className="flex flex-row items-center justify-center min-h-screen bg-gray-900 text-white font-sans p-6">
      <div className="flex flex-col items-center justify-center w-1/2 p-6">
        <h1 className="text-6xl font-extrabold mb-4">Yavuz Selim Çelik</h1>
        <ReactTypingEffect
          className="text-3xl mb-8"
          text={["Developer", "Designer", "Creator", "Computer Engineer"]}
          speed={100}
          eraseSpeed={50}
          eraseDelay={2000}
          typingDelay={500}
        />
        <button class="resume">
          <span class="circle1"></span>
          <span class="circle2"></span>
          <span class="circle3"></span>
          <span class="circle4"></span>
          <span class="circle5"></span>
          <span class="text">
            <a href={Resume} download="resume.pdf">
              Resume
            </a>
          </span>
        </button>
      </div>
      <div className="bg-gray-800 p-8 rounded-lg shadow-md w-1/2 max-w-xl mt-16">
        <h2 className="text-4xl font-bold mb-6 text-center">About Me</h2>
        <p className="aboutText">
          Hi, I'm Yavuz Selim Çelik, a passionate Computer Engineer with a love
          for front-end development and mobile app creation. With a deep
          understanding of various technologies, I aim to create visually
          appealing and high-performance applications.
        </p>
        <p className="aboutText">
          I'm always excited to learn new things and take on challenges that
          push the boundaries of my skills. Whether it's building responsive
          user interfaces or working on the latest mobile technologies, I am
          committed to delivering top-notch solutions.
        </p>
        <p className="aboutText">
          Feel free to explore my work and reach out if you have any exciting
          projects in mind!
        </p>
      </div>
    </div>
  );
};

export default HomePage;
