import React from 'react';
import { jsPDF } from 'jspdf';
import { navigate } from 'gatsby';

const Resume = () => {
  const generatePDF = () => {
    const doc = new jsPDF();
    
    doc.setFontSize(20);
    doc.setFont("helvetica", "bold");
    doc.text('Jobet P. Casquejo', 20, 30);
    
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.text('Email: jobetcasquejo221@gmail.com', 20, 50);
    doc.text('Phone: 09817153118', 20, 60);
    doc.text('LinkedIn: linkedin.com/in/jobet-casquejo', 20, 70);
    doc.text('GitHub: github.com/jobet1130', 20, 80);
    
    doc.setLineWidth(0.5);
    doc.line(20, 90, 190, 90);
    
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text('Objective', 20, 100);
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.text('Seeking a position in software development to utilize my skills and contribute to the success of the organization.', 20, 110);

    doc.line(20, 120, 190, 120);
    
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text('Work Experience', 20, 130);
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    
    doc.text('Salesforce Developer | Aether Global | Sept 2024 - Present', 20, 140);
    doc.text('- Developed and customized Salesforce solutions for clients.', 20, 150);
    doc.text('- Integrated third-party applications with Salesforce.', 20, 160);

    doc.text('Junior Developer | AlphaSys Pty Ltd | Jan 2023 - Sept 2024', 20, 170);
    doc.text('- Built and maintained Java-based applications for enterprise clients.', 20, 180);
    
    doc.text('Community Support | StudevPH | Sept 2023 - Present', 20, 190);
    doc.text('- Provide community-driven support to users, ensuring technical issues are resolved efficiently.', 20, 200);
    
    doc.text('Java Application Support | USTP Panaon Campus | May 2022 - July 2022', 20, 210);
    doc.text('- Provided application support for Java-based applications for the university.', 20, 220);

    doc.line(20, 230, 190, 230); 
    
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text('Education', 20, 240);
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.text('Bachelor of Science in Computer Science', 20, 250);
    doc.text('USTP Panaon Campus | Graduated: 2022', 20, 260);

    doc.line(20, 270, 190, 270); 


    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text('Skills', 20, 280);
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    
    doc.text('Salesforce', 20, 290);
    doc.text('Java', 20, 300);
    doc.text('JavaScript', 20, 310);
    doc.text('ReactJS', 20, 320);
    doc.text('Python', 20, 330);
    
    doc.save('resume.pdf');
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Download My Resume</h2>

      <div className="bg-white p-6 rounded-md shadow-md mb-6">
        <h3 className="text-xl font-semibold text-gray-700">Contact Information</h3>
        <ul className="space-y-2 mt-4 text-gray-600">
          <li>Email: johndoe@example.com</li>
          <li>Phone: 123-456-7890</li>
          <li>LinkedIn: linkedin.com/in/johndoe</li>
          <li>GitHub: github.com/johndoe</li>
        </ul>
      </div>

      <div className="bg-white p-6 rounded-md shadow-md mb-6">
        <h3 className="text-xl font-semibold text-gray-700">Objective</h3>
        <p className="text-gray-600 mt-4">Seeking a position in software development to utilize my skills and contribute to the success of the organization.</p>
      </div>

      <div className="bg-white p-6 rounded-md shadow-md mb-6">
        <h3 className="text-xl font-semibold text-gray-700">Work Experience</h3>
        <div className="space-y-4 mt-4 text-gray-600">
          <div>
            <p className="font-semibold">Salesforce Developer | Aether Global | Sept 2024 - Present</p>
            <ul className="list-disc list-inside">
              <li>Developed and customized Salesforce solutions for clients.</li>
              <li>Integrated third-party applications with Salesforce.</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Junior Developer | AlphaSys Pty Ltd | Jan 2023 - Sept 2024</p>
            <ul className="list-disc list-inside">
              <li>Built and maintained Java-based applications for enterprise clients.</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Community Support | StudevPH | Sept 2023 - Present</p>
            <ul className="list-disc list-inside">
              <li>Provide community-driven support to users, ensuring technical issues are resolved efficiently.</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Java Application Support | USTP Panaon Campus | May 2022 - July 2022</p>
            <ul className="list-disc list-inside">
              <li>Provided application support for Java-based applications for the university.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-md shadow-md mb-6">
        <h3 className="text-xl font-semibold text-gray-700">Education</h3>
        <p className="text-gray-600 mt-4">Bachelor of Science in Computer Science, USTP Panaon Campus | Graduated: 2022</p>
      </div>

      <div className="bg-white p-6 rounded-md shadow-md mb-6">
        <h3 className="text-xl font-semibold text-gray-700">Skills</h3>
        <ul className="space-y-2 mt-4 text-gray-600">
          <li>Salesforce</li>
          <li>Java</li>
          <li>JavaScript</li>
          <li>ReactJS</li>
          <li>Python</li>
        </ul>
      </div>

      <button
        onClick={generatePDF}
        className="w-full bg-blue-600 text-white p-3 mt-4 rounded-md hover:bg-blue-700 transition"
      >
        Download Resume as PDF
      </button>

      <div className="mt-4 text-center">
        <button
          onClick={() => navigate(-1)}
          className="w-full bg-gray-600 text-white p-3 mt-4 rounded-md hover:bg-gray-700 transition"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default Resume;
