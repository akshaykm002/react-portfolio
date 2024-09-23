import React from "react";
import profilePic from "../assets/profilePic.jpg";

const Hero = () => {
  return (
    <div className="border-b border-neutral-800 pt-4 pb-28 lg:mb-30">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="mb-6 text-6xl font-thin tracking-tight lg:mt-16 lg:text-7xl">
              Akshay KM
            </h1>
            <span className="text-3xl  bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
              Full Stack Developer
            </span>
            <p className="max-w-xl  my-2 py-6 font-light tracking-tighter">
            Welcome to My Portfolio!
            I’m a passionate Full Stack Developer with a background in MERN stack development and hands-on experience from a successful software development internship. With expertise in React, Node.js, Express, Moleculer, PostgreSQL, MongoDB, and more, I’m eager to bring innovative solutions to the tech world. Let’s build something amazing together!
            </p>
          </div>
        </div>
        <div className="w-full mt-10  lg:w-1/2  lg:p-10 ">
          <div className="flex justify-center">
            <img
              src={profilePic}
              alt="Profile Picture"
              style={{
                width: "340px",
                height: "340px",
                objectFit: "cover",
                clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
