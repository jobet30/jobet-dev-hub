import React from "react";
import SkillsHero from "../components/SkillsHero";
import SkillsGrid from "../components/SkillsGrid";
import Layout from "../components/Layout";

const SkillsPage = () => {
    return(
        <Layout>
            <div className="py-20 px-6 text-white max-w-7xl mx-auto">
                <SkillsHero />
                <SkillsGrid />
            </div>
        </Layout>
    )
}

export default SkillsPage;