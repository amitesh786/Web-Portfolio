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
            "Freelancer",
            "Nodejs Developer",
          ]}
        loop={0}
        cursor
        cursorStyle="|"
        typeSpeed={50}
        deleteSpeed={30}
        delaySpeed={1000}
      />
    </div>
  );
}

export default Type;
