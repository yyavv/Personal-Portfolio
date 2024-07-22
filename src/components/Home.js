import React from "react";
import ReactTypingEffect from "react-typing-effect";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-purple-500 to-indigo-600 text-white">
      <h1 className="text-5xl font-bold mb-4">Yavuz Selim Çelik</h1>
      <ReactTypingEffect
        className="text-2xl"
        text={["Developer", "Designer", "Another Role"]}
        speed={100}
        eraseSpeed={50}
        eraseDelay={2000}
        typingDelay={500}
      />
    </div>
  );
};

export default Home;
