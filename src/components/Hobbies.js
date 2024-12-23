import React from "react";

const Hobbies = () => {
  const hobbies = ["Coding", "Playing Chess","Reading Books"];

  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600">
        Hobbies
      </h2>
      <div className="flex flex-wrap gap-4">
        {hobbies.map((hobby, index) => (
          <span
            key={index}
            className="bg-teal-500 text-white px-4 py-2 rounded-full shadow-md"
          >
            {hobby}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Hobbies;
