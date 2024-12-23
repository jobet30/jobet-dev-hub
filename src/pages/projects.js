import React from "react";
import ProjectHero from "../components/ProjectHero";
import ProjectGallery from "../components/ProjectGallery";
import Layout from "../components/Layout";

const ProjectsPage = () => {
    return(
        <Layout>
            <div className="py-20 px-6 text-white max-w-7xl mx-auto">
                <ProjectHero />
                <ProjectGallery />
            </div>
        </Layout>
    );
}

export default ProjectsPage;
