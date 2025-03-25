import React from "react";
import Tilt from "react-parallax-tilt";

const PersonalInfo = () => {
  return (
    <div className="flex flex-wrap items-center justify-center flex-col lg:flex-row relative overflow-hidden">
      <img
        src="./star.jpg"
        alt=""
        className="h-full w-full object-cover opacity-10 absolute bottom-0"
      />
      <div className="w-full lg:w-1/2 h-1/2 lg:h-full flex items-center justify-center flex-col my-10 lg:gap-10">
        <h1 className="flex text-white text-2xl lg:text-4xl gap-2 my-10">
          LET ME <p className="text-[#ad50eb]">INTRO</p> MYSELF
        </h1>
        <div className="flex items-center m-auto justify-center w-11/12 lg:w-3/4 lg:mr-10">
          <span className="flex flex-col gap-3 text-white items-start  text-base justify-center font-semibold lg:text-lg">
            <p>
              I'm a Senior Frontend Developer based in Milan with 8+ years of experience in JavaScript, React, Angular, Vue, Next.js, Node.js, and Express.js. I build high-performance, scalable web applications, from blogging platforms to e-commerce solutions.
              Passionate about UI/UX, I craft responsive, optimized, and engaging user experiences, blending design best practices with cutting-edge frontend technologies.
            </p>
            <p>
              Constantly learning and evolving, I thrive in dynamic environments where technology meets creativity. 
              Let's connect and build exceptional digital experiences together!
            </p>
          </span>
        </div>
      </div>
      <div className="w-full lg:w-1/2 h-full flex items-center justify-center p-10">
        <Tilt>
          <img src="man.png" alt="" className="object-cover" />
        </Tilt>
      </div>
    </div>
  );
}

export default PersonalInfo;
