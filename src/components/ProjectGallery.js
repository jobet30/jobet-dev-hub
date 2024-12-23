import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectGallery = () => {
  const projects = [
    {
      id: "1",
      title: "Portfolio Website",
      description: "A personal portfolio built with GatsbyJS.",
      longDescription:
        "This portfolio showcases my projects, skills, and professional experience using GatsbyJS, React, and TailwindCSS.",
      status: "Completed",
      images: ["/images/project1-1.jpg", "/images/project1-2.jpg"],
    },
    {
      id: "2",
      title: "E-commerce Platform",
      description: "An online store for selling products.",
      longDescription:
        "This e-commerce platform provides a seamless shopping experience, integrated with payment gateways and inventory management.",
      status: "Planning",
      images: ["/images/project2-1.jpg", "/images/project2-2.jpg"],
    },
    {
      id: "3",
      title: "Social Media App",
      description: "A social media platform for sharing content.",
      longDescription:
        "This social media app allows users to create profiles, post content, and interact with other users through features like likes, comments, and direct messaging.",
      status: "Planning",
      images: ["/images/project3-1.jpg", "/images/project3-2.jpg"],
    },
    {
      id: "4",
      title: "Content Management System",
      description: "A platform for managing and publishing content.",
      longDescription:
        "This content management system allows users to create, edit, and publish content, including blog posts, news articles, and other types of content.",
      status: "Planning",
      images: ["/images/project4-1.jpg", "/images/project4-2.jpg"],
    },
    {
      id: "5",
      title: "Mobile App",
      description: "A mobile application for a specific use case.",
      longDescription:
        "This mobile app provides a specific set of features and functionality for a specific use case, such as a travel app for booking flights and hotels.",
      status: "Planning",
      images: ["/images/project5-1.jpg", "/images/project5-2.jpg"],
    },
    {
      id: "6",
      title: "Web App",
      description: "A web application for managing a business or organization.",
      longDescription:
        "This web app provides a platform for managing tasks, projects, and other business-related activities, such as a task management tool or a CRM system.",
      status: "Planning",
      images: ["/images/project6-1.jpg", "/images/project6-2.jpg"],
    },
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 py-8">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </section>
  );
};

export default ProjectGallery;
