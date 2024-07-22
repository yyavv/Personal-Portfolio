import React from "react";

const roles = ["Developer", "Designer", "Creator", "Problem Solver"];

const Banner = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-white text-center">
      <h1 className="text-5xl font-bold mb-4">Yavuz Selim Çelik</h1>
      <p className="text-2xl relative">
        I am a{" "}
        <span className="inline-block relative h-10 overflow-hidden">
          {roles.map((role, index) => (
            <span
              key={index}
              className="absolute w-full animate-change opacity-0"
              style={{ animationDelay: `${index * 2}s` }}
            >
              {role}
            </span>
          ))}
        </span>
      </p>
      <style jsx>{`
        @keyframes change {
          0%,
          20%,
          100% {
            opacity: 0;
          }
          25%,
          95% {
            opacity: 1;
          }
        }
        .animate-change {
          animation: change 8s infinite;
        }
      `}</style>
    </div>
  );
};

export default Banner;
