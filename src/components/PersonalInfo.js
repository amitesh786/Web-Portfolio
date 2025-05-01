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
            I'm a Senior Frontend Developer based in Milan with 8+ years of experience creating high-performance, scalable web applications across various domains.
            <br />I specialize in crafting responsive and engaging user interfaces with a strong focus on UI/UX.
          </p>
          <p>
            Lately, I've been exploring AI and machine learning, building smart bots to automate appointment bookings and cancellations.
            <br />I also work with Docker and Kubernetes to optimize deployment and scalability in cloud environments.
            <br />Always learning and evolving, I thrive where technology and creativity intersect.
          </p>
          <p>
            <strong>Let's connect and build something great together!</strong>
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
