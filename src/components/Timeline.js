import React from "react";

const Timeline = () => {

    const timeline = [
        {
            "year": "2022",
            "description": "Graduated Bachelor of Science in Information Technology at USTP Panon Campus."
        },
        {
            "year": "2023",
            "description": "Started to work as Junior Developer at AlphaSys Pty Ltd."
        },
        {
            "year": "2023",
            "description": "Same year started as a Volunteer at StudevPH as a Community Support."
        },
        {
            "year": "2024",
            "description": "Started to work as a Salesforce Developer at Aether Global."
        }
    ];

    return(
        <div className="mt-10">
            <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600">
                Career Timeline
            </h3>
            <ul>
                {timeline.map((item, index) => (
                    <li key={index} className="flex items-start space-x-4">
                        <div className="text-teal-400 font-bold">{item.year}</div>
                        <div className="text-lg">{item.description}</div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Timeline;