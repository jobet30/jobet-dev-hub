import React from "react";
import { Link } from "gatsby";

const ProjectCard = ({ project }) => {
  return (
    <div className="border rounded-lg shadow-md p-4 bg-white hover:shadow-lg transition">
      <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
      <p className="text-gray-700 mb-4">{project.description}</p>
      <p className="text-sm text-gray-500 mb-2">Status: {project.status}</p>
      <Link
        to={`/projects/${project.slug}`}
        className="text-blue-500 hover:text-blue-700"
      >
        View Details
      </Link>
    </div>
  );
};

export default ProjectCard;
