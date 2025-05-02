import React from "react";
import { Typewriter } from "react-simple-typewriter";

const Type = () => {
  return (
    <div>
      <Typewriter
        words={
          [
            "Senior Frontend Developer",
            "React-Native Mobile Developer",
            "Node.js Developer",
            "Freelancer",
            "AI/ML Enthusiast",
            "DevOps with Docker & Kubernetes"
          ]}
        loop={0}
        cursor
        cursorStyle="|"
        typeSpeed={100}
        deleteSpeed={50}
        delaySpeed={2000}
      />
    </div>
  );
}

export default Type;
