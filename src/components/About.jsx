import React from "react";
import aboutPic from "../assets/About.jpg";

const About = () => {
  return (
    <div className="border-b border-neutral-800 pb-4">
      <h1 className="my-14 text-center text-4xl">
        About
        <span className="text-neutral-500"> Me</span>
      </h1>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center items-center">
            <img className="rounded w-80" src={aboutPic} alt="About Image" />
          </div>
        </div>
        <div className='w-full pt-8 lg:w-1/2 lg:p-8'>
            <div className='flex justify-center lg:justify-start'>
                <p className="max-w-xl font-light tracking-tighter">
                    I’m a tech enthusiast who completed a B.Sc. in Computer Science from Calicut University (2020-2023) and a MERN stack development course at Luminar Technolab, Kochi (June 2023 - January 2024). I gained practical experience as a Software Development Intern at Innovation Incubator Advisory from March to August 2024. Skilled in a wide range of technologies including HTML, CSS, JavaScript, React, Node.js, Express.js, Angular, Moleculer.js, PostgreSQL, MongoDB, REST API's, Git and many frameworks. I’m constantly learning and staying updated with the latest trends in tech. Along with strong self-learning and research abilities, I’m looking forward to growing my career as a Full Stack Developer and applying my knowledge to solve real-world challenges.
                </p>

            </div>

            </div>
      </div>
    </div>
  );
};

export default About;
