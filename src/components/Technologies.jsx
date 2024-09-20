import React from "react";
import { FaReact, FaNodeJs } from "react-icons/fa"; 
import {
  SiMongodb,
  SiExpress,
  SiPostgresql,
  SiJavascript,
  SiAngular,
} from "react-icons/si"; 

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-4">
      <h1 className="my-20 text-center text-4xl">Technologies</h1>
      <div className="flex flex-wrap justify-center items-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaReact className="text-5xl" color="#61DAFB" title="React" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaNodeJs className="text-5xl" color="#339933" title="Node.js" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiExpress className="text-5xl" color="#ffffff" title="Express.js" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiJavascript
            className="text-5xl"
            color="#F7DF1E"
            title="JavaScript"
          />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiPostgresql
            className="text-5xl"
            color="#336791"
            title="PostgreSQL"
          />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiMongodb className="text-5xl" color="#47A248" title="MongoDB" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiAngular className="text-5xl" color="#DD0031" title="Angular" />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
