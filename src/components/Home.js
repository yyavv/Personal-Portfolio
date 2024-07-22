import React from "react";
import ReactTypingEffect from "react-typing-effect";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-green-700 to-green-950 text-white">
      <h1 className="text-5xl font-bold mb-4">Yavuz Selim Çelik</h1>
      <ReactTypingEffect
        className="text-2xl"
        text={[
          "Computer Engineer",
          "Front End Developer",
          "Mobile App Developer",
        ]}
        speed={100}
        eraseSpeed={50}
        eraseDelay={2000}
        typingDelay={500}
      />
    </div>
  );
};

export default Home;
