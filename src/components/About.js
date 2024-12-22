import React from "react";
import profileImage from "../images/profile-image.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 text-white relative overflow-hidden bg-transparent"
    >
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl font-extrabold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 fade-up">
          About Me
        </h2>
        <div className="mx-auto mb-12 relative">
          <div
            className="w-40 h-40 rounded-full mx-auto mb-6 shadow-2xl border-4 border-white overflow-hidden transform hover:scale-110 transition-all duration-500"
          >
            <img
              src={profileImage}
              alt="Jobet Casquejo"
              className="w-full h-full object-cover brightness-100 contrast-125"
            />
          </div>
          <p className="text-lg mb-6 fade-up-delay-100">
            I’m Jobet Casquejo, a seasoned Salesforce and Java Developer with over 1
            year of experience in driving technical innovation and delivering scalable and
            high-performance software solutions. My expertise spans across full-stack
            development, system architecture, and optimizing workflows to enhance business
            performance.
          </p>
          <p className="text-lg mb-6 fade-up-delay-200">
            Over the years, I’ve worked on diverse projects that challenge me to think
            creatively, solving business problems and enhancing user experiences. I focus on
            delivering clean, maintainable code, mentoring junior developers, and aligning
            technical strategies with business goals.
          </p>
          <p className="text-lg mb-6 fade-up-delay-300">
            I thrive in collaborative environments where cross-functional teams work
            together to innovate and execute. My goal is to continue refining my skills while
            contributing to the success of every project I’m a part of, ensuring that both
            technical and business objectives are met with excellence.
          </p>
        </div>
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-teal-300 to-blue-200 opacity-25 transform rotate-12 scale-150 z-0"></div>
      </div>
    </section>
  );
};

export default About;
