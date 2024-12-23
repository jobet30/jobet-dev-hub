import React from "react";

const Values = () => {
  const values = [
    { title: "Innovation", description: "Finding better solutions constantly." },
    { title: "Collaboration", description: "Building strong teams and relationships." },
    { title: "Excellence", description: "Delivering high-quality work consistently." },
  ];

  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600">
        Core Values
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {values.map((value, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <h4 className="text-xl font-semibold text-teal-400 mb-4">
              {value.title}
            </h4>
            <p className="text-white">{value.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Values;
