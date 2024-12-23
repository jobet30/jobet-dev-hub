import React from "react";
import ProfileImage from "../components/ProfileImage";
import AboutText from "../components/AboutText";
import Timeline from "../components/Timeline";
import Hobbies from "../components/Hobbies";
import Values from "../components/Values";
import Quotes from "../components/Quotes";
import Layout from "../components/Layout";

const AboutPage = () => {
    return (
        <Layout>
            <div className="py-20 px-6 text-white max-w-7xl mx-auto">
                <ProfileImage />
                <AboutText />
                <Timeline />
                <Hobbies />
                <Values />
                <Quotes />
            </div>
        </Layout>
    );
}

export default AboutPage;