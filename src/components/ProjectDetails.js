import React from "react";

const ProjectDetails = ({ project }) => (
  <div className="mt-4">
    <h3 className="text-lg font-bold mb-2">Project Details:</h3>
    <p className="text-gray-700 mb-2">{project.longDescription}</p>
    {project.images && (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {project.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={project.title}
            className="rounded-md"
          />
        ))}
      </div>
    )}
  </div>
);

export default ProjectDetails;
