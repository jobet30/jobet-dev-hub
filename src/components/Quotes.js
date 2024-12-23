import React from "react";

const Quotes = () => {
  const personalQuotes = [
    "“The only way to do great work is to love what you do.” — Steve Jobs",
    "“Simplicity is the ultimate sophistication.” — Leonardo da Vinci",
    "“Code is like humor. When you have to explain it, it’s bad.” — Cory House",
    "“Strive not to be a success, but rather to be of value.” — Albert Einstein",
    "“Opportunities don't happen. You create them.” — Chris Grosser",
    "“Passion for learning fuels innovation.” — Jobet Casquejo",
    "“Coding is not just a skill, it's an expression of creativity.” — Jobet Casquejo",
    "“Continuous improvement drives meaningful results.” — Jobet Casquejo",
  ];

  return (
    <div className="mt-10 text-center">
      <h2 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600">
        Personal Quotes
      </h2>
      <div className="space-y-6 max-w-3xl mx-auto">
        {personalQuotes.map((quote, index) => (
          <blockquote
            key={index}
            className="text-white italic text-lg border-l-4 border-teal-500 pl-4"
          >
            {quote}
          </blockquote>
        ))}
      </div>
    </div>
  );
};

export default Quotes;
