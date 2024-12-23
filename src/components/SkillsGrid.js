import React from "react";
import { FaSalesforce, FaJava, FaReact, FaPython } from "react-icons/fa";
import { SiGatsby, SiMysql, SiDocker, SiGithub, SiMulesoft } from "react-icons/si";
import { FiBook } from "react-icons/fi";

const SkillsGrid = () => {
  return (
    <section className="flex flex-wrap justify-center gap-8 p-8">
      <div className="flex flex-col items-center p-6 rounded-lg shadow-lg w-48 text-center hover:shadow-2xl transition-shadow duration-300 bg-blue-600 text-white">
        <FaSalesforce className="text-4xl" />
        <h3 className="text-lg font-semibold mt-4">Salesforce</h3>
        <p className="text-sm">Advanced</p>
      </div>

      <div className="flex flex-col items-center p-6 rounded-lg shadow-lg w-48 text-center hover:shadow-2xl transition-shadow duration-300 bg-orange-600 text-white">
        <FaJava className="text-4xl" />
        <h3 className="text-lg font-semibold mt-4">Java</h3>
        <p className="text-sm">Advanced</p>
      </div>

      <div className="flex flex-col items-center p-6 rounded-lg shadow-lg w-48 text-center hover:shadow-2xl transition-shadow duration-300 bg-blue-400 text-white">
        <FaReact className="text-4xl" />
        <h3 className="text-lg font-semibold mt-4">ReactJS</h3>
        <p className="text-sm">Intermediate</p>
      </div>

      <div className="flex flex-col items-center p-6 rounded-lg shadow-lg w-48 text-center hover:shadow-2xl transition-shadow duration-300 bg-teal-500 text-white">
        <SiGatsby className="text-4xl" />
        <h3 className="text-lg font-semibold mt-4">GatsbyJS</h3>
        <p className="text-sm">Intermediate</p>
      </div>

      <div className="flex flex-col items-center p-6 rounded-lg shadow-lg w-48 text-center hover:shadow-2xl transition-shadow duration-300 bg-green-600 text-white">
        <FaPython className="text-4xl" />
        <h3 className="text-lg font-semibold mt-4">Python</h3>
        <p className="text-sm">Intermediate</p>
      </div>

      <div className="flex flex-col items-center p-6 rounded-lg shadow-lg w-48 text-center hover:shadow-2xl transition-shadow duration-300 bg-purple-600 text-white">
        <SiMysql className="text-4xl" />
        <h3 className="text-lg font-semibold mt-4">SQL</h3>
        <p className="text-sm">Advanced</p>
      </div>

      <div className="flex flex-col items-center p-6 rounded-lg shadow-lg w-48 text-center hover:shadow-2xl transition-shadow duration-300 bg-gray-800 text-white">
        <SiGithub className="text-4xl" />
        <h3 className="text-lg font-semibold mt-4">Github Workflow</h3>
        <p className="text-sm">Intermediate</p>
      </div>

      <div className="flex flex-col items-center p-6 rounded-lg shadow-lg w-48 text-center hover:shadow-2xl transition-shadow duration-300 bg-gray-600 text-white">
        <SiDocker className="text-4xl" />
        <h3 className="text-lg font-semibold mt-4">Docker</h3>
        <p className="text-sm">Intermediate</p>
      </div>

      <div className="flex flex-col items-center p-6 rounded-lg shadow-lg w-48 text-center hover:shadow-2xl transition-shadow duration-300 bg-indigo-600 text-white">
        <FiBook className="text-4xl" />
        <h3 className="text-lg font-semibold mt-4">Jupyter</h3>
        <p className="text-sm">Intermediate</p>
      </div>
      <div className="flex flex-col items-center p-6 rounded-lg shadow-lg w-48 text-center hover:shadow-2xl transition-shadow duration-300 bg-blue-700 text-white">
        <SiMulesoft className="text-4xl" />
        <h3 className="text-lg font-semibold mt-4">MuleSoft</h3>
        <p className="text-sm">Intermediate</p>
      </div>
    </section>
  );
};

export default SkillsGrid;
