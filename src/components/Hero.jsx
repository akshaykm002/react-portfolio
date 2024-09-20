import React from "react";
import profilePic from "../assets/profilePic.jpg";

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 py-4 lg:mb-36">
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
              A Full Stack Developer with 6 months of internship experience,
              skilled in JavaScript, HTML, CSS, and React.js for building
              responsive web applications. Proficient in backend development
              with Node.js, Express.js, and Moleculer.js for creating APIs and
              microservices. Experienced with MongoDB and PostgreSQL for
              database management, and well-versed in version control using Git.
              Capable of developing, testing, and deploying scalable full-stack
              applications.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2  lg:p-10 ">
          <div className="flex justify-center">
            <img
              src={profilePic}
              alt=""
              style={{
                width: "400px",
                height: "400px",
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
