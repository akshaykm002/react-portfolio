import React from 'react';
import project1 from "../assets/projects/realestate.png";
import project2 from "../assets/projects/ecommerce.jpg";
import project3 from "../assets/projects/tictactoe.png";
import project4 from "../assets/projects/bmi.jpg";

const Projects = () => {
  const PROJECTS = [
    {
      title: "Real Estate Application",
      image: project1,
      description:
        "Developed a dynamic real estate web application using the MERN stack, enabling seamless buying, selling, and renting of properties.",
      technologies: ["React", "Node", "Express", "MongoDB","REST"],
    },
    {
      title: "E-Commerce Platform",
      image: project2,
      description:
        "Developed an e-commerce web application using React.js, Moleculer.js, and PostgreSQL.Implemented user authentication, product management, admin role-based access, and Stripe payment integration.",
      technologies: ["React", "Node", "Moleculer", "PostgreSQL","REST"],
    },
    {
      title: "Tic Tac Toe Game",
      image: project3,
      description:
        "Built a dynamic Tic-Tac-Toe game using React, featuring sound effects for game actions. Implemented smooth gameplay with interactive UI and logic to handle game states such as wins, draws, and resets. ",
      technologies: ["React"],
    },
    {
      title: "BMI Calculator",
      image: project4,
      description:
        "Developed a BMI Calculator using React.js with a responsive user interface. The app dynamically calculates Body Mass Index based on user input, providing real-time feedback on health status. ",
      technologies: ["React"],
    },
  ];

  return (
    <div className='border-b border-neutral-800 pb-4'>
      <h1 className='flex items-center justify-center my-20 text-4xl'>Projects</h1>
      <div className='flex flex-col items-center'>
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className='flex flex-col lg:flex-row items-center rounded-lg drop-shadow-lg overflow-hidden mb-8 w-full max-w-4xl mx-auto'
          >
            {/* Image Section */}
            <div className='flex-shrink-0 w-36 h-24 lg:w-44 lg:h-32 bg-transparent flex items-center justify-center mx-20'>
              <img
                src={project.image}
                alt={project.title}
                className='w-full h-full object-cover rounded'
              />
            </div>

            {/* Project Details Section */}
            <div className='p-4 flex-grow lg:w-auto text-center lg:text-left'>
              <h6 className='font-bold'>{project.title}</h6>
              <p className='mt-2 text-gray-600'>{project.description}</p>

              {/* Technologies Styled Like Buttons */}
              <div className='mt-2 flex flex-wrap justify-center lg:justify-start'>
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className='m-1 px-2 py-1 text-sm  bg-gray-700 text-violet-400'
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
