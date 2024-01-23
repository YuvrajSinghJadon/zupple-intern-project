import React from "react";
import "../../../src/index.css";

const Box = ({ blockNumber, speed, size, transactions, weight }) => {
  const cubeStyle = {
    position: "relative",
    width: "120px",
    height: "120px",
    transformStyle: "preserve-3d",
    transform: "rotateX(-12deg) rotateY(7deg) rotateZ(1deg)",
  };

  const faceStyle = {
    position: "absolute",
    width: "120px",
    height: "120px",
    backgroundColor: "rgba(31, 31, 42, 0.8)",
    boxSizing: "border-box",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  const topFaceStyle = {
    ...faceStyle,
    backgroundColor: "rgba(38, 38, 55, 1)", // Change the background color for the right face
    transform:
      "rotateY(90deg) translateZ(60px) translateX(5px) translateY(0px)",
  };

  return (
    <div style={cubeStyle} className="text-slate-200 mb-5">
      <div
        className=" text-yellow-500 bg-gradient-to-b from-violet-600 to-blue-700 text-center "
        style={{ ...faceStyle, transform: "translateZ(55px)" }}
      >
        {blockNumber}
        <br />
        {speed}
        <br />
        {size}
        <br />
        {weight}
        <br />
      </div>
      <div
        style={{ ...faceStyle, transform: "rotateY(180deg) translateZ(65px)" }}
      ></div>
      <div
        style={{
          ...faceStyle,
          transform: "rotateY(-90deg) translateZ(60px) translateX(-5px) ",
        }}
      ></div>
      <div
        style={{
          ...faceStyle,
          transform: "rotateY(90deg) translateZ(60px) translateX(5px) ",
        }}
      ></div>
      <div
        style={{
          ...topFaceStyle,
          transform: "rotateX(90deg) translateZ(60px) translateY(-5px)",
        }}
      ></div>
      <div
        style={{
          ...faceStyle,
          transform: "rotateX(-90deg) translateZ(60px) translateY(5px)",
        }}
      ></div>
    </div>
  );
};

export default Box;
