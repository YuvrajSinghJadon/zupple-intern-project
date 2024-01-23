import React from "react";

// KeyValueDisplay component to display key-value pairs
const KeyValueDisplay = ({ label, value, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div
      className={`flex flex-col lg:flex-row gap-4 lg:gap-8 w-full lg:w-[90%] mx-auto p-2 ${
        isEven ? "bg-tertiary" : "bg-secondry"
      }`}
    >
      <div className="lg:w-[40%] w-full">{label}</div>
      <div className="lg:w-[60%] w-full font-semibold overflow-hidden bg-gradient-to-r from-cyan-500 to-blue-500 inline-block text-transparent bg-clip-text">
        {value}
      </div>
    </div>
  );
};

export default KeyValueDisplay;
